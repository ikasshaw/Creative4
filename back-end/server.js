const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
const multer = require('multer')
const fs = require('fs')

// Configure multer so that it will upload to '../front-end/public/images'
const upload = multer({
    // dest: '/var/www/c4.isaacshaw.net/images/',
    dest: '../front-end/public/images/',
    limits: {
        fileSize: 10000000
    }
});

const contactMeSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    date: Date,
    message: String,
});

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    path: String,
})

// Create a model for items in the museum.
const Contact = mongoose.model('Contact', contactMeSchema);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const Project = mongoose.model('Project', projectSchema);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/personalSite', {
    useNewUrlParser: true
});

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/contact', async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        date: req.body.date,
        message: req.body.message,
    });
    try {
        await contact.save();
        res.send(contact);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get a list of all of the items in the museum.
app.get('/api/contact', async (req, res) => {
    try {
        let contact = await Contact.find();
        res.send(contact);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete('/api/contact/:id', async (req, res) => {
    try {

        // console.log(req);
        let contact = await Contact.findOne({
            _id: req.params.id
        });
        await contact.deleteOne({
            _id: req.params.id
        });

        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//PROJECT API

app.post('/api/photos', upload.single('photo'), async (req, res) => {
    // Just a safety check
    if (!req.file) {
        return res.sendStatus(400);
    }
    res.send({
        path: "/images/" + req.file.filename
    });
});

app.post('/api/project', async (req, res) => {
    const project = new Project({
        title: req.body.title,
        description: req.body.description,
        path: req.body.path,
    });
    try {
        await project.save();
        res.send(project);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/api/project', async (req, res) => {
    try {
        let project = await Project.find();
        res.send(project);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete('/api/project/:id', async (req, res) => {
    try {

        let project = await Project.findOne({
            _id: req.params.id
        });// Get the path from the item object.

        await Project.deleteOne({
            _id: req.params.id
        });

        // const path = "/var/www/c4.isaacshaw.net" + item.path;

        // await fs.unlink(path, (err) => {
        //     if (err) {
        //         console.error(err)
        //     }
        // });

        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.put('/api/project/:id', async (req, res) => {

    try {
        let project = await Project.findOne({
            _id: req.params.id
        });
        project.title = req.body.title;
        project.description = req.body.description;
        await project.save();

        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.listen(5000, () => console.log('Server listening on port 5000!'));
