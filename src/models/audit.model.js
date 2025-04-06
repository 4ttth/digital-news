import mongoose from "mongoose";
import User from "./user.model";

const auditSchema = new mongoose.Schema({
    transaction:{
        action:{
            type: String, // Create, Edit, Delete
            required: true
        },
        target:{
            type: String, 
            enum: ["News", "User", "Comment", "Org", "Guest", "Event"],
            required: true
        },
        targetId:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            validate: {
                validator: async function (value) {
                    const targetModel = this.transaction.target;
                    const models = {
                        News: mongoose.model('News'),
                        User: mongoose.model('User'),
                        Comment: mongoose.model('Comment'),
                        Org: mongoose.model('Org'),
                        Guest: mongoose.model('Guest'),
                        Event: mongoose.model('Event'),
                    };
                    
                    if (!models[targetModel]) {
                        return false; // Invalid target model
                    }

                    const exists = await models[targetModel].exists({ _id: value });
                    return !!exists; // Return true if exists, false otherwise
                },
                message: (props) =>
                    `Invalid targetId: ${props.value} is not a valid ID for ${this.transaction.target}`,
            },
        },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        validate: {
            validator: async function (value) {
                const exists = await User.exists({ _id: value });
                return !!exists; // Return true if exists, false otherwise
            },
            message: (props) =>
                `Invalid userId: ${props.value} is not a valid ID for User`,
        },
    }
}, {
    collection: "audits",
    timestamps: true  // createdAt and updatedAt fields for each document
});

const News = mongoose.model('News', newsSchema);

export default News;