import BaseCtrl from "../base";
import Feedback from './feedback.model';

export default class FeedbackCtrl extends BaseCtrl {
    model = Feedback;

    saveUserFeedback = (req, res) => {
        var feedback = req.body;
        feedback.user = req.user._id;

        let newFeedback = new Feedback(feedback);
        newFeedback.save()
        .then(this.respondWithResult(res))
        .catch(this.handleError(res))
    }

    getAdminFeedbacks = (req, res) => {
        Feedback.find()
        .populate('user', 'displayName eamil phoneNumber createdAt')
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }
}