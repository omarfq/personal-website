// Packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const config = require('./config');

// Config
const app =  express();
app.use(bodyParser.json());
app.use(cors());

// Email Sending Setup
const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: config.SENDGRID_API_KEY
    }
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });

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

const port = process.env.PORT || 5000;

// Port Listen
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

