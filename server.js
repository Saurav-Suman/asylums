
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/course', function (req, res) {
  res.sendFile(path.join(__dirname + '/course.html'));
});

router.get('/sitemap', function (req, res) {
  res.sendFile(path.join(__dirname + '/sitemap.html'));
});

//add the router
app.use(express.static(__dirname + '/view'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/assets'));
//Store all JS and CSS in Scripts folder.

app.use('/', router);
app.listen(process.env.PORT || 3000);

console.log('Running at Port 3000');
