var options = {
    timeout: 15000, // Service call timeout

    nfl: {
      version: 'nfl/v2',
      key: '' // <-- Pass in your nfl key here
    }
  };

  var fantasyData = require('fantasydata-api')(options);
 
var season = '2017REG';
fantasyData.nfl.Byes(season, function(err, results){
  console.log(JSON.stringify(results, null, 2));
});