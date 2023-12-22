const path = require('path');
const coarseModel = require('../models/coarseModel');

exports.getAllCoarse = async (req, res) => {
  try {
    const coarse= await coarseModel.find({});
    res.json(coarse);
  } catch (err) {
    res.json(err);
  }
};

exports.getCoarseById = async (req, res) => {
  try {
    const id = req.params.id;
    const coarse = await coarseModel.findOne({ _id: id });
    res.json(coarse);
  } catch (err) {
    res.json(err);
  }
};

exports.updateCoarseById = async (req, res) => {
    try {
      const id = req.params.id;
      const coarse = await coarseModel.findOneAndUpdate(
        { _id: id },
        {
            Coarsetname: req.body.Coarsetname,
            studentId: req.body.studentId,
            preRequstCoarse: req.body.preRequstCoarse,
            department:req.body.department,
            creditHour:req.body.creditHour,
            estc:req.body.estc,
            status:req.body.status,
            isComplated:req.body.isComplated,
        },
        { new: true }
      );
      res.json(coarse);
    } catch (err) {
      res.json(err);
    }
  };

exports.deleteCoarseById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await coarseModel.findByIdAndDelete({ _id: id });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

exports.createCoarse = async (req, res) => {
    try {
      const { Coarsetname, studentId,preRequstCoarse,department,creditHour,estc,status,semister,year,isComplated} = req.body;
       const Coarse = await coarseModel.create({ Coarsetname, studentId,preRequstCoarse, department,creditHour,estc,status,semister,year,isComplated});
      res.json(Coarse);
    } catch (err) {
      res.json(err);
    }
  };
