var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=e39e1738963d426dab8cfced5b160d2f';
  request(url, function (error, response, body) {
    var data = JSON.parse(body);
    var articles = data.articles.filter((e)=>{
      return e.author!=null;
    });
    res.render('./render.twig',{articles:articles});
  });
});

module.exports = router;
