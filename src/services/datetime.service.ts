import Option from '../api/option/option.model';
import * as moment from 'moment-timezone';

export default class DatetimeService {
    timezone = 'Asia/Dhaka';
    bdMoment = (date?) => {
        return moment(date).tz(this.timezone);
    };

    getTodayDeliverySlots = (timeSlots) => {
        let currentTime = this.bdMoment().hours();

        return timeSlots.filter(slot => {
            slot.status = currentTime < slot.start;
            return slot.status;
        });
    }
    makeDeliverySlotsDisable = (timeSlots) => {
        return timeSlots.map(slot => {
            slot.status = false;
            return slot;
        });
    }
}