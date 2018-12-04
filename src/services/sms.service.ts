// import Config from '../config';
const axios = require('axios');

// const config = new Config();

export default class SmsService {

    sendSms(mobile, text) {
        let url = `https://api2.onnorokomsms.com/HttpSendSms.ashx?op=OneToOne&type=TEXT&mobile=${mobile}&smsText=${text}&username=01737899245&password=8212&maskName=&campaignName=Register`;
        console.log(text);
        
        // const url = `${}&mobile=${mobile}&smsText=${text}`;
        axios.get(url)
        .then((response) => {
            console.log('onnorokom response---------',response.data) // 200
            // console.log(response.headers['content-type']) // 'image/png'
        })
        .catch((err) => {
            console.log('onnorokom error ---------',err);
        })
    }

}