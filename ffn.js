var FFNerd = require('fantasy-football-nerd');
var ff = new FFNerd({ api_key: 'pd4jucvp26jb' });
 
ff.teams(function(teams){
    console.log('Got teams');
});