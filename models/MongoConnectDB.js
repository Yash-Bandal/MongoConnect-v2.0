import { mongoose } from "mongoose";

const MongoSchema = new mongoose.Schema(
    // {
    //     title: String,
    //     Subject: String,
    //     UserName: String,
    //     RBT: String,
    //     division: String,
    //     mail: String,
    //     content:String
    // }
    {
        Subject: {
            type: String,
            // required: true
        },
        UserName: {
            type: String,
            required: true
        },
        RBT: {
            // type: String,
            type: Number,
            required: true
        },
        division: {
            type: String,
            // required: true
        },
        mail: {
            type: String,
            required: true,
            unique: true   // If email must be unique for each note
        },
        content: {
            type: String,
            default: ''    // Optional field
        }
    }    
)

//Apply schema and export to server.js
export const MongoConnectDB = mongoose.model('MongoConnectDB', MongoSchema);

