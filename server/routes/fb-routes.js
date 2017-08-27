var express = require('express');
var router = express.Router();

const FB = require('fb');
const fb = new FB.Facebook({version: 'v2.10'});

const setAccessToken = (req, res, next) => {
  FB.setAccessToken(req.headers.accesstoken);
  next()
}


router.post('/status', (req, res)=>{
  console.log('masuk==>');
  FB.setAccessToken(req.headers.accesstoken)
  console.log("=x=x=x>",req.headers.accesstoken);
  FB.api('/me/feed', 'post', {message: req.body.status} ,(response)=>{
    //res.json(response)
    console.log("RESPONSE",response);
  })
})


router.get('/timeline',(req, res)=>{
  console.log("masuk");
  FB.setAccessToken(req.headers.accesstoken);
  FB.api('/me/feed', (response)=>{
    res.send(response)
    // response.data.forEach(data =>{
    //       // console.log("=====>",data.story);
    //       console.log(data);
    // })
  })
})

module.exports = router;
