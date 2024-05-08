import express from 'express';
import Model from '../models/model.js';
const router = express.Router();

//Test Method
router.get('/', (req, res) => {
    res.send('Hello World');
});

//Get Schema Method
router.get('/getSchema', async (req, res) => {
    try {
        const schema = Model.schema;
        res.json(schema);
    } catch (error) {
        res.status(500);
    }
});

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        title: req.body.title,
        description: req.body.description,
        done: req.body.done,
        type: req.body.type
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

//Update Method
router.put('/update/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        data.title = req.body.title;
        data.description = req.body.description;
        data.done = req.body.done;
        data.type = req.body.type;

        const dataToUpdate = await data.save();
        res.json(dataToUpdate);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Delete method
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedDocument = await Model.findByIdAndDelete(req.params.id);
        res.json(deletedDocument);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;