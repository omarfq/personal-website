// Packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

// Config
const app =  express();
app.use(bodyParser.json());
app.use(cors());

// Handle Production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public'));

    // Handle SPA
    app.get(/.*/, (req, res, next) => {
        res.sendFile(__dirname + '/public/index.html');
    });
}
const port = process.env.PORT || 5000;

// Email Sending Setup
const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: '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'
    }
}));

app.post('/', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const content = `Name: ${name} \n Email: ${email} \n Message: ${message}`;

    const mail = {
        from: email,
        to: 'omarenriquefq@gmail.com',
        subject: 'New Message from Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({ msg: 'fail' });
        } else {
            res.json({ msg: 'success' });
        }
    });
});

// Port Listen
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

