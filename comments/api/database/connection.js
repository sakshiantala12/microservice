const mongoose = require("mongoose");

const connectDB = () => {
    try{
        mongoose.connect(process.env.DBURL,
        {
            useNewUrlParser: true,
        }
        );

        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "connection error: "));
        db.once("open", function () {
        console.log("Database Connected successfully");
        });

    } catch(error){
        console.error("MongoDB connection FAIL",error.message);
    }
}
  
module.exports=connectDB;