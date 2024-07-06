const usermodel=require('../models/Usermodel');

const nodemailer= require('nodemailer');
const Batchmodel = require('../models/Batchmodel');


const getUsersByBatchYear = async (req, res) => {
    try {
        const { year } = req.body;

        // Find the batch by year
        const batch = await Batchmodel.findOne({ year });
        if (!batch) {
            return res.status(404).send({ msg: "Batch not found" });
        }

        // Find users by batch ID
        const users = await usermodel.find({ batch: batch._id }).lean();

        res.status(200).send({ users });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
}

module.exports={getUsersByBatchYear};