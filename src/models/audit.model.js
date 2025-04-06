import mongoose from "mongoose";

const auditSchema = new mongoose.Schema({
    transaction:{
        action:{
            type: String,
            required: true
        },
        target:{
            type: String,
            required: true
        },
        targetId:{
            type: String,
            required: true
        },
    },
    author:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
}, {
    collection: "audits",
    timestamps: true  // createdAt and updatedAt fields for each document
});

const News = mongoose.model('News', newsSchema);

export default News;