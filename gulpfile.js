'use strict';
const gulp = require('gulp');
const nodemailer = require('nodemailer');

gulp.task('test_mail', function() {

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'xxx@e-mundo.de',
            pass: 'xxx'
        }
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'XXX <xxx@e-mundo.de>', // sender address
        to: 'xxx@e-mundo.de', // list of receivers
        subject: 'Hello from nodemail', // Subject line
        text: 'Nodemailer works!', // plaintext body
        html: 'Nodemailer <strong>works</strong>!' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
});