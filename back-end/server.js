const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
const fs = require('fs')

const contactMeSchema = new mongoose.Schema({
    Name: String,
    date: String,
    email: String,
    content: String,
});


// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/museum', {
    useNewUrlParser: true
});

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
    // Just a safety check
    if (!req.file) {
        return res.sendStatus(400);
    }
    res.send({
        path: "/images/" + req.file.filename
    });
});

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
    const item = new Item({
        title: req.body.title,
        description: req.body.description,
        path: req.body.path,
    });
    try {
        await item.save();
        res.send(item);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get a list of all of the items in the museum.
app.get('/api/items', async (req, res) => {
    try {
        let items = await Item.find();
        res.send(items);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete('/api/items/:id', async (req, res) => {
    try {

        let item = await Item.findOne({
            _id: req.params.id
        });// Get the path from the item object.

        await Item.deleteOne({
            _id: req.params.id
        });

        const path = "/var/www/museum.isaacshaw.net" + item.path;
        await fs.unlink(path, (err) => {
            if (err) {
                console.error(err)
            }
        });

        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.put('/api/items/:id', async (req, res) => {

    try {
        let item = await Item.findOne({
            _id: req.params.id
        });
        item.title = req.body.title;
        item.description = req.body.description;
        await item.save();

        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});


app.listen(3000, () => console.log('Server listening on port 3000!'));
