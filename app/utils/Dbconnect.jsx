import mongoose  from "mongoose";

const Dbconnect = () => {
    if(mongoose.connection.readyState ){
        return mongoose.connection
    }
    return mongoose.connect("mongodb://127.0.0.1:27017");

}

export default Dbconnect;

// command 
// npm i mongoose

// table = schema
// column = field
// single data = document
// database = collection

// password-npm i bcryptjs

// npm i cookie jsonwebtoken
