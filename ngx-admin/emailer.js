//please read: https://developers.google.com/gmail/api/auth/about-auth

const nodemailer = require('nodemailer');
var express = require('express');
var app = express();
var port = process.env.PORT || 3002;

var auth = {
    type: 'oauth2',
    user: 'devanandragland@gmail.com',
    clientId: '105250557149-regfgfesrvtattkvvjf5om5qvubokm45.apps.googleusercontent.com',
    clientSecret: 'TvR2Xi9Z9jN4fvUMrXopRXft',
    refreshToken: '1/0_pr3KIMHtT8JEUQTkibInQ3yjxW3hzFyn8y-wB-f4wRr3MyK-jAvUgJlxCFzQ9p',
};

app.use(express.json());
app.use(express.urlencoded());
//app.use(express.multipart());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/send', function(req, res){
  response = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  }
  
  
  var mailOptions = {
      from: req.body.name,
      to: 'devanandragland@gmail.com',
      subject: 'My site contact from: ' + req.body.name,
      text: req.body.message,
      html: 'Message from: ' + req.body.name + '<br></br> Email: ' +  req.body.email + '<br></br> Message: ' + req.body.message,
  };
var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: auth,
  });
transporter.sendMail(mailOptions, (err, res) => {
      if (err) {
          return console.log(err);
      } else {
          console.log(JSON.stringify(res));
		  res.status(200).json({status:"ok"})
      }
  });
  res.status(200).json({status:"ok"});
})

// start the server
app.listen(port);