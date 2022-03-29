const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "helpdesk.lettuce",
        pass: "qwerty@01"
    }
});

const sendMail = (email, subject, body, callback) => {
    let mailDetails = {
        from: 'helpdesk.lettuce',
        to: email,
        subject: subject,
        text: body
    }
    console.log(mailDetails.from)
    console.log(mailDetails.to)
    console.log(mailDetails.subject)
    console.log(mailDetails.text)
    transporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            callback(err, null);
        }
        return callback(null, data);
    })
};

module.exports = {sendMail};