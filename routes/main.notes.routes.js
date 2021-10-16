const express = require("express");
const path = require('path');

const { createNoteService } = require("../services/create.note.service.js");
const { readNoteService } = require("../services/read.note.service.js");
const { editNoteService } = require("../services/edit.note.service.js");
const { deleteNoteService } = require("../services/delete.note.service.js");

const router = express.Router();
// router.use(express.static(path.join(__dirname, "../public")));

//Get aggregated data statistics. You don’t have to mock this data. You need to calculate it based on notes objects you have.
//get object with analyzed stats table data
// router.get('/stats',()=>{
//
// });
// //Get all notes.
// router.get('/',()=>{
//
// });


//Create
router.post('/', createNoteService);
//Read
router.get('/:id', readNoteService);
//Update
router.patch('/:id', editNoteService);
//Delete
router.delete('/:id', deleteNoteService);

module.exports = router;
