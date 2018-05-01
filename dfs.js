var dfs = require('node-dfs');

var contest = new dfs.Contest({
  maxFromTeam: 3,
  maxSalary: 50000,
  minGames: 2,
  positionCounts: { QB: 1, RB: 2, WR: 2, TE: 1 }
});

var errors = contest.validateLineup(lineup);

var dfs = require('node-dfs');

var lineup = new dfs.Lineup();

lineup.addPlayer(player);

var total = lineup.calculateTotalSalary();

var games = lineup.getGameCounts();

var games = lineup.getPositionCounts();

var games = lineup.getTeamCounts();

lineup.removePlayer(player);

var dfs = require('node-dfs');

var player = new dfs.Player({
  gameId: 26,
  id: 1263,
  name: "Alex Smith",
  position: "QB",
  salary: 7500,
  team: "KC"
});