const mongoose = require('mongoose');

const CoarseModelSchema = new mongoose.Schema({
  Coarsetname: String,
  studentId:String,
  preRequstCoarse:String,
  department: String,
  creditHour:String,
  estc:String,
  status: Boolean,
  semister: String,
  year:Date,


});

const CoarseModel= mongoose.model('CoarseModelSchema', CoarseModelSchema);
module.exports = CoarseModel;