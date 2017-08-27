var OAuth = require('oauth');
require('dotenv').config()

function searchTwit(req, res)
{
  var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.RAHASIA,
        process.env.RAHASIA1,
        '1.0A',
        null,
        'HMAC-SHA1'
      );
      //var autoTyping = req.query.writting
      oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.search}`,
            process.env.SANGATRAHASIA, //test user token
            process.env.SANGATRAHASIA1, //test user secret
            function (e, data, respond){
              if (e) console.error(e);
              res.send(data)
            });
}


function homeTimeLine(req, res)
{
  var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.RAHASIA,
        process.env.RAHASIA1,
        '1.0A',
        null,
        'HMAC-SHA1'
      );
      //var autoTyping = req.query.writting
      oauth.get(
            `https://api.twitter.com/1.1/statuses/home_timeline.json?q=${req.params.timeline}`,
            process.env.SANGATRAHASIA, //test user token
            process.env.SANGATRAHASIA1, //test user secret
            function (e, data, respond){
              if (e) console.error(e);
              res.send(data)
            });
}

function updateStatuses(req, res){
  var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.RAHASIA,
        process.env.RAHASIA1,
        '1.0A',
        null,
        'HMAC-SHA1'
      );
      //var autoTyping = req.query.writting
      oauth.post(
            `https://api.twitter.com/1.1/statuses/update.json`,
            process.env.SANGATRAHASIA, //test user token
            process.env.SANGATRAHASIA1, //test user secret
            {"status": req.body.updateStatus},
            function (e, data, respond){
              if (e) console.error(e);
              res.send(data)
            });
}

function directMessage(req, res){
  var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.RAHASIA,
        process.env.RAHASIA1,
        '1.0A',
        null,
        'HMAC-SHA1'
      );
      //var autoTyping = req.query.writting
      oauth.post(
            `https://api.twitter.com/1.1/direct_messages/new.json`,
            process.env.SANGATRAHASIA, //test user token
            process.env.SANGATRAHASIA1, //test user secret
            {"text": req.body.dm,
              "screen_name":req.body.target
            },
            function (e, data, respond){
              if (e) console.error(e);
              res.send(data)
            });

}

function showDm(req, res)
{
  var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.RAHASIA,
        process.env.RAHASIA1,
        '1.0A',
        null,
        'HMAC-SHA1'
      );
      //var autoTyping = req.query.writting
      oauth.get(
            `https://api.twitter.com/1.1/direct_messages/show.json?id=${req.params.id}`,
            process.env.SANGATRAHASIA, //test user token
            process.env.SANGATRAHASIA1, //test user secret
            function (e, data, respond){
              if (e) console.error(e);
              res.send(data)
            });
}

function showSelfStatus(req, res)
{
  var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.RAHASIA,
        process.env.RAHASIA1,
        '1.0A',
        null,
        'HMAC-SHA1'
      );
      //var autoTyping = req.query.writting
      oauth.get(
            `https://api.twitter.com/1.1/direct_messages/show.json?id=${req.params.id}`,//=======================>>>>>>>>>>>>>>>>>
            process.env.SANGATRAHASIA, //test user token
            process.env.SANGATRAHASIA1, //test user secret
            function (e, data, respond){
              if (e) console.error(e);
              res.send(data)
            });
}

module.exports = {
  searchTwit,
  homeTimeLine,
  updateStatuses,
  directMessage,
  showDm
}
