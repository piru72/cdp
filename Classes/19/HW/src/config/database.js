const mongoose = require('mongoose'); 
const dotEnv = require('dotenv');
dotEnv.config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@austpicpicco.pqlgqmi.mongodb.net/?retryWrites=true&w=majority&appName=austpicPicco`;

const initDB = () => { 
  mongoose.connect(uri, { dbName: process.env.DB_NAME});
  mongoose.connection.once('open', () => { 
    console.log('connected to database'); 
  }); 
  
  mongoose.connection.on('error', console.error); 
} 
module.exports = initDB;