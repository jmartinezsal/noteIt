const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const {Note, Notebook, Tag} = require('../../db/models');


const router = express.Router();

const noteValidations = [
	check("title")
		.isLength({ min: 1, max: 25 })
		.withMessage("Title must be between 1 and 25 characters."),
	handleValidationErrors,
];

//Get all hte notes of the user that are not currently trashed
router.get('/', requireAuth, asyncHandler(async(req,res) =>{
  const userId = req.user.id;

  const userNotes = await Note.findAll({
    include: [ {
      model: Notebook,
      attributes: ['title'],
      where:{
        userId
      }},
  ],
    where: {
      trashed: false
    },

  })

  return res.json(userNotes)
}));

//Get single note by the noteId
router.get('/:noteId(\\d+)', requireAuth, asyncHandler(async(req,res) =>{
  const id = parseInt(req.params.noteId, 10);
  const userId = req.user.id;

  const userNote = await Note.findOne({
    include: [ {
      model: Notebook,
      attributes: ['title'],
      where:{
        userId
      },
    },
  ],
    where: {
      id: id
    },
    order: [["updatedAt", "DESC"]],
  })

  return res.json(userNote)
}));

//Create a new note for a notebook
router.post('/', requireAuth, noteValidations, asyncHandler(async(req,res) =>{

  const { notebookId, title, content, trashed} = req.body;

  const newNote = await Note.create( {notebookId, title, content, trashed})

  return res.json(newNote);
}))

router.put('/:noteId(\\d+)', noteValidations, requireAuth, asyncHandler(async(req, res) =>{
  const id = parseInt(req.params.noteId,10)

  const { notebookId, title, content, trashed} = req.body;

  await Note.update( {notebookId, title, content, trashed},
    {
      where:{id},
      returning: true,
      plain: true
    })

  const editNote = await Note.findByPk(id);

  return res.json(editNote)
}))


module.exports = router;
