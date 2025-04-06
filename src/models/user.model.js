import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
    access: {
        level: {
            type: Number,
            required: true
        },
        group: {
            type: String,
            required: true
        }
    },
    details: {
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        nickname:{
            type: String,
            required: true
        }
    }
}, {
    collection: "users",
    timestamps: true  // createdAt and updatedAt fields for each document
});

const User = mongoose.model('User', newsSchema);

export default User;