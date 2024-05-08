import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const collectionName = process.env.COLLECTION_NAME;

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    done: {
        required: true,
        type: Boolean
    },
    type: {
        required: true,
        type: String,
        enum: ['daily', 'general']
    }
})

export default mongoose.model(collectionName, dataSchema);