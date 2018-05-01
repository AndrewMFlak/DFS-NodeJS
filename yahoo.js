var YahooFantasy = require('yahoo-fantasy');
// you can get an application key/secret by creating a new application on Yahoo!
var yf = new YahooFantasy(
  Y!APPLICATION_KEY,
  Y!APPLICATION_SECRET
);

// if a user has logged in (not required for all endpoints)
yf.setUserToken(
  Y!CLIENT_TOKEN,
  Y!CLIENT_SECRET
);

// query a resource/subresource
yf.{resource}.{subresource} (
  {possible argument(s)},
  function cb(err, data) {
    // handle error
    // callback function
    // do your thing
  }
);


// per yahoo doc
GET https://social.yahooapis.com/v1/user/abcdef123/profile?format=json
Authorization: Bearer aXJUKynsTUXLVY