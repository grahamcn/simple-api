const sportsRouter = require('../services/sports/sportsRouter');
const competitionsRouter = require('../services/competitions/competitionsRouter');

module.exports = function (app) {

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use('/sports', sportsRouter);
  app.use('/competitions', competitionsRouter);

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });
};