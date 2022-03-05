import mongoose from "mongoose";




const Connection= async(URL)=>{

    try {       
        
    

    await mongoose.connect(URL,{ useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false } );
    console.log("Database connected Succesfully");

    } catch (error) {
        console.log("Error while connecting to MongoDB",error);
    }

}

export default Connection;