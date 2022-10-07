const Chart = require('../models/chart.js');

const GraphController = {
  Index: (req, res, next) => {
    console.log("############## Now in GraphController Index ##############")
    req.body.chart = new Chart();

    console.log("############## Chart has been created with no data ##############")

    next();
  }
}

module.exports = GraphController;

