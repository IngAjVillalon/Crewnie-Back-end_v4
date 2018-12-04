// Could not use import as this file is being shared with client

// interface systemOptions {}

export default class Config {
  secrets: any = { session: '098bd890' };
  smsEnabled = true;
  emailEnabled = true;
  mongoURL = 'mongodb://crewniedb:Jolpori23@ds119394.mlab.com:19394/crewnie';
  // mongoURL = 'mongodb://mongo:27017/bddb';
  facebook = {
    appID: '598992633816887',
    appSecret: '8ee3933df437c092f62d53780a2fa0be'
  };
  sendGridApiKey = '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';

  // onnorokom = {
  //   username: '01737899245',
  //   password: '8212',
  //   // API: `https://api2.onnorokomsms.com/HttpSendSms.ashx?op=OneToOne&type=TEXT&username=01737899245&password=8212`
  // };

  userRoles: string[] = ['SA', 'Admin', 'User'];
  deliveryTypes: string[] = ['SCHEDULED', 'EXPRESS'];
  orderStatus: string[] = ['PLACING', 'PLACED','CONFIRMED', 'PACKED', 'ONTHEWAY', 'DELIVERED', 'CANCELLED', 'RETURNED'];
  paymentMethods: string[] = ['COD', 'BKASH', 'ROCKET'];
  systemOptions = {
    express_delivery_first_hour: 'express_delivery_first_hour',
    express_delivery_last_hour: 'express_delivery_last_hour',
    scheduled_delivery_last_hour: 'scheduled_delivery_last_hour',
  }


  // This should be in ascending order of authority. e.g. In this case guest will not have access to any other role,
  // where as admin will have the role of guest+user+vendor+manager+admin

  forgotPasswordEmail = (body) => {
    return {
      from: 'passwordreset@bazardesh.com',
      to: body.email,
      subject: 'bazardesh Password Reset Request',
      text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
      'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
      'http://' + body.host + '/account/reset-password/' + body.token + '\n\n' +
      'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    };
  }
  resetPasswordEmail = (body) => {
    return {
      from: 'passwordreset@bazardesh.com',
      to: body.email,
      subject: 'bazardesh Password Changed',
      text: 'Hello,\n\n' +
      'This is a confirmation that the password for your account ' + body.to + ' has just been changed.\n'
    };
  }
  orderPlacedEmail = (body) => {
    return {
      from: 'SA <superadmin@bazardesh.com>',
      to: body.to,
      subject: 'Order Placed Successfully',
      text: 'Order No: ' + body.orderNo
      + '\n Status: ' + body.status
      + '\n\n Payment Method: ' + body.payment_method
      + '\n\n Payment ID: ' + body.id
      + '\n Amount: ' + body.amount.total + ' ' + body.amount.currency
      + '\n\n Address: \n Name: ' + body.address.recipient_name
      + '\n Line: ' + body.address.line1
      + '\n City: ' + body.address.city
      + '\n State: ' + body.address.state
      + '\n Zip: ' + body.address.postal_code
    };
  }
  orderUpdatedEmail = (body) => {
    return {
      from: 'SA <superadmin@bazardesh.com>',
      to: body.to,
      subject: 'Your Order Status Updated',
      text: 'Order No: ' + body.orderNo
      + '\n Status: ' + body.status
      + '\n\n Payment Method: ' + body.payment_method
      + '\n\n Payment ID: ' + body.id
      + '\n Amount: ' + body.amount.total + ' ' + body.amount.currency
      + '\n\n Address: \n Name: ' + body.address.recipient_name
      + '\n Line: ' + body.address.line1
      + '\n City: ' + body.address.city
      + '\n State: ' + body.address.state
      + '\n Zip: ' + body.address.postal_code
    };
  }
  demo = false;
  currency = {
    code: 'USD', // Paypal currency code *** Please choose from https://developer.paypal.com/docs/classic/api/currency_codes/
    shop_currency: 'INR',
    symbol: 'Rs ', // Currency symbol to be displayed through out the shop
    exchange_rate: '0.015' // Paypal currency code(USD) / Shop currency (INR) ***  exchange_rate should not be 0 else it will generate divided by 0 error
  };
}
