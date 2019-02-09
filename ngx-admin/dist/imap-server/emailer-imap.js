var nodemailer = require('nodemailer');
var express = require('express');
var app = express();
var port = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded());



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/send', function(req, res){
	
var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'autosecsystemsmadurai@gmail.com',
        pass: 'Autosec12'
    }
});

  response = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
	phone:  req.body.phone
  }
  
  
  var mailOptions = {
      from: req.body.name,
      to: 'devanandragland@gmail.com',
      subject: 'My site contact from: ' + req.body.name,
      text: req.body.message,
      html: 'You have received a new message from your website (autosec.com) contact form. <br><br/>Here are the details:<br></br>Name: ' + req.body.name + '<br></br>Email: ' +  req.body.email + '<br></br>Phone: ' +  req.body.phone + '<br></br> Message: ' + req.body.message,
  };
	
transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);

})
 res.status(200).json({status:"ok"});
})
// start the server
app.listen(port);