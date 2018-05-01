var espn = require('espn');
 
espn
    .setApiKey('YOUR_ESPN_API_KEY')
    .now( function (err, json) {
        if (err) {
            console.error(err);
            return;
        }
 
        console.log(json);
    });