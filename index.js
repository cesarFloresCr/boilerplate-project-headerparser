// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

//who am i
app.get('/api/whoami',function(req,res){
/*par obtner ip */
  const axios = require('axios');
  //para saber que lenguaje tiene el explorador
  const acceptLanguage = req.headers['accept-language'];
  //para saber que explorar esta usando el usuario
  const platform = req.headers['user-agent'];

  /*peticion de ip publica*/
  axios.get('https://ipapi.co/json/')
    .then(response => {
      const publicIP = response.data.ip;
      res.json({
        ipaddress: publicIP,
        language: acceptLanguage,
        software: platform
      });
      console.log(`Tu dirección IP pública es: ${publicIP}`);
    })
    .catch(error => {
      console.log('Error al obtener la dirección IP pública:');
    });

  
});