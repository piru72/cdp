const EVENTS = require('../data.js').EVENTS;
const { getCurrentTimeWithSeconds } = require('../utils/utils.js');
const {AcademicSessionModel} = require('../models/academicSession.js');
const Validator = require('validatorjs');

const getAcademicSessionDetails = async() => {
    try {
        const academicSession = await AcademicSessionModel.findOne().sort({ _id: -1 }).limit(1);
        return academicSession.academicSession;
    } catch (error) {
        console.error('Error retrieving academic session:', error);
        return null;
    }
};

const updateAcademicSessionDetails = async (academicSessionParam) => {
    try {
        const existingSession = await AcademicSessionModel.findOne();

        if (!existingSession) {
           
            const newAcademicSession = new AcademicSessionModel({
                academicSession: academicSessionParam
            });
            await newAcademicSession.save();
        } else {

            existingSession.academicSession = academicSessionParam;
            await existingSession.save();
        }

        return "Academic Session Updated successfully!";
    } catch (error) {
        return "Error updating academic session";
    }
};

const validateAcademicSession = (academicSession) => {
    const rules = {
        academicSession: ['required', 'regex:/^(fall|spring)20\\d{2}$/i']
    };
    const validation = new Validator({ academicSession }, rules);

    return validation.passes(); 
};


module.exports = {
    getAcademicSessionDetails,
    updateAcademicSessionDetails,
    validateAcademicSession
};