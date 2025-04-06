import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    headline:{
        type: String,
        required: true
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
    collection: "news",
    timestamps: true  // createdAt and updatedAt fields for each document
});

const News = mongoose.model('News', newsSchema);

export default News;