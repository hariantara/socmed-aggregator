// var FB = require('fb');
window.fbAsyncInit = function() {
  FB.init({
    appId: '110720889623362',
    cookie: true, // enable cookies to allow the server to access
    // the session
    xfbml: true, // parse social plugins on this page
    version: 'v2.10' // use graph api version 2.8
  });
};

// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function FBLogin() {
  FB.login(function(response) {
    console.log('fblogin response ', response)
    if (response.authResponse) {
      localStorage.setItem('fbaccesstoken', response.authResponse.accessToken)
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  }, {
    scope: 'public_profile,email,publish_actions,user_posts'
  });
}

function updateStatus(){
  axios.post('http://localhost:3000/facebook/status',{
    status: $('#status').val()
  },{
    headers:{
      accessToken: localStorage.getItem('fbaccesstoken')
    }
  })
  .then((response)=>{
    console.log(response);
  })
  .catch(err=>{
    console.log(err);
  })
}

function logOut(){
  localStorage.removeItem('fbaccesstoken')
  window.location.href('/index.html')
}

function getTimeLine(){
  axios.get('http://localhost:3000/facebook/timeline',{
    headers:{
      accessToken: localStorage.getItem('fbaccesstoken')
    }
  })
  .then((response)=>{
    console.log(response);
  })
}
