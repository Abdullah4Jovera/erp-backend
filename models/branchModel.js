// models/branchModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BranchSchema = new Schema({
  name: { type: String, required: true },
  created_by: { type: String},
  timestamp: { type: Date, default: Date.now },
  delstatus: { type: Boolean, default: false },

});

module.exports = mongoose.model('Branch', BranchSchema);
