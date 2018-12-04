import Config from '../config';
const sgMail = require('@sendgrid/mail');

const config = new Config();

export default class EmailService {
    
    sendEmail(email, subject, body) {
        sgMail.setApiKey(config.sendGridApiKey);
        const msg = {
            to: email,
            from: 'support@bazardesh.com',
            subject: subject,
            text: body
        };
        sgMail.send(msg);
    }

}