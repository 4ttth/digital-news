import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
    credentials: {
        username:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        primaryEmail:{
            type: String,
            required: true
        },
        secondaryEmail:{
            type: String,
            required: false
        }
    },
    details: {
        firstName:{
            type: String,
            required: false
        },
        lastName:{
            type: String,
            required: false
        },
        nickname:{
            type: String,
            required: false
        }
    }
}, {
    collection: "guests",
    timestamps: true  // createdAt and updatedAt fields for each document
});

const Guest = mongoose.model('Guest', newsSchema);

export default Guest;