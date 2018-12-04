import TimeSlot from './timeslot.model';
import BaseCtrl from './../base';
import * as moment from 'moment-timezone';
import OptionService from '../../services/option.service';
import DatetimeService from '../../services/datetime.service';
import Config from '../../config';
const optionService = new OptionService();
const datetimeService = new DatetimeService();
const config = new Config();

export default class TimeslotCtrl extends BaseCtrl {
    model = TimeSlot;

    getDeliverySlotsByDate = (req, res) => {
        if(!req.params.date) {
            res.status(400).send('Invalid date');
        }
        var date: moment.Moment;
        try {
            date = datetimeService.bdMoment(req.params.date);
        } catch (e) {
            res.status(400).send('Invalid date');
        }

        TimeSlot.find({active: true})
        .sort('start')
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(timeSlots => {
            const currentDate: moment.Moment = datetimeService.bdMoment();
            // console.log({
            //     isSame: date.isSame(currentDate, 'day'),
            //     isAfter: date.isAfter(currentDate, 'day'),
            //     isbefore: date.isBefore(currentDate, 'day'),
            // });
            
            if(date.isSame(currentDate, 'day')) {
                return datetimeService.getTodayDeliverySlots(timeSlots)
            } else if (date.isAfter(currentDate, 'day')) {
                return timeSlots;
            } else if (date.isBefore(currentDate, 'day')) {
                return [];
            } else {
                return Promise.reject('Invalid time')
            }
        })
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

    getByID = (req, res) => {
        TimeSlot.findOne({
            _id: req.params.id
        })
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

    updateByID = (req, res) => {
        if (req.body._id) {
            delete req.body._id;
        }
        req.body.updatedBy = req.user._id;
        TimeSlot.findOne({
            _id: req.params.id
        })
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(this.patchUpdates(req.body))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

    getExpressTimeSlot = (req, res) => {
        let slotStart = datetimeService.bdMoment().format('LT');
        let slotEnd = datetimeService.bdMoment().add(90, 'minutes').format('LT');
        
        optionService
        .getOptions()
        .then((options: any) => {
            // console.log('------------',options, config.systemOptions)

            let firstHour = options[config.systemOptions.express_delivery_first_hour];
            let lastHour = options[config.systemOptions.express_delivery_last_hour];
            let currentHour = datetimeService.bdMoment().hours();
            if(currentHour >= lastHour || currentHour < firstHour) {
                return { message: 'Express delivery is only available between '+ 
                    moment(firstHour, 'H').format('ha') +' to '+ 
                    moment(lastHour, 'H').format('ha') } ;
            } else {
                return { schedule_time: slotStart + ' - ' + slotEnd + ' (Exp)' };
            }                
        })
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));

    }

    
}