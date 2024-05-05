import express from 'express';
import Model from '../models/model.js';
const router = express.Router();

//Test Method
router.get('/', (req, res) => {
    res.send('Hello World');
});

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;