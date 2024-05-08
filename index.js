import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/routes.js';

dotenv.config();
const mongoString = process.env.DATABASE_URL;

console.log("ENVIRONMENT VARIABLES");
console.log(process.env.DATABASE_URL);
console.log(process.env.COLLECTION_NAME);

mongoose.connect(mongoString)
    .catch(error => console.log(error));

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

function runServer() {
    const app = express();

    app.use(express.json());

    //All routes must be prefixed with /api
    app.use('/api', router)

    app.listen(3000, () => {
        console.log(`Server Started at ${3000}`);
    });
}

database.once('connected', () => {
    console.log('Database Connected');

    //Server will start only if the database is connected
    runServer();
});

