const note = require('../models/note.models.js');

exports.create = (req,res) => {
    //validate request
    if(!req.body.content) {
        return res.status(400).send({
            message : "note content can not be empty"
        });
    }

    //create a note
    
    const note = new note({
        title : req.body.title || "Untitled Note",
        content : req.body.content
    });

    note.save().then(data => {
        res.send(data);
    }).catch(err => { 
        res.status(500).send({
            message : err.message || "some error occured while creating the Note."
        });
    })
};