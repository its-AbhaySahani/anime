const mongoose = require('mongoose');


const DB = 'mongodb+srv://process.env.USER:process.env.PASSWORD@gokuflix.5lrfzuy.mongodb.net/?retryWrites=true&w=majority&appName=GokuFlix';

const connectDb = async () => {
    try{
        await mongoose.connect(DB);
        console.log("connection successful to DB");
        } catch (error) {
          console.error("database connection failed");
          process.exit(0);
        }
    
};

module.exports = connectDb;
