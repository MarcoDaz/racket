const mongoose = require('mongoose');

const ChartSchema = new mongoose.Schema({
  type: String,
  data: {
  label: [String],
  datasets:[{
    label: String,
    data: [Number],
    backgroundColor: [String],
    borderWidth: Number
  }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: Boolean
      }
    }
  }
});

const Chart = mongoose.model("Chart", ChartSchema)
module.exports = Chart;
