import mongoose from "mongoose";

const orgSchema = new mongoose.Schema({
    officerDetails: {
        firstName: {
            type: String,
            required: true
        },
        secondName: {
            type: String,
            required: true
        },
        nickname: {
            type: String,
            required: true
        },
    },
    positionDetails: {
        title: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            required: true
        },
        ordinalLevel: {
            type: Number,
            required: true
        }
    }
}, {
    collection: "orgdata",
    timestamps: true  // createdAt and updatedAt fields for each document
});

const Org = mongoose.model('Org', newsSchema);

export default Org;