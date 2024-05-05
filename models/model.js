import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const collectionName = process.env.COLLECTION_NAME;

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

export default mongoose.model(collectionName, dataSchema);