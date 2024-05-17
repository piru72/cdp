const mongoose = require('mongoose')
const schema = mongoose.Schema

const academicSessionSchema = new schema({academicSession : String});

const AcademicSessionModel = mongoose.model('AcademicSession', academicSessionSchema);

module.exports = { AcademicSessionModel };