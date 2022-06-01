const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const {Note, Notebook, Tag} = require('../../db/models');


const router = express.Router();

const noteValidations = [
	check("title")
		.exists({ checkFalsy: true })
		.isLength({ min: 1, max: 255 })
		.withMessage("Title must be between 1 and 255 characters."),
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

  const userNotes = await Note.findOne({
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

  return res.json(userNotes)
}));

//Create a new note for a notebook
router.post('/', requireAuth, noteValidations, asyncHandler(async(req,res) =>{

  const { notebookId, title, content, trashed} = req.body;

  const newNote = await Note.create( {notebookId, title, content, trashed})

  return res.json(newNote);
}))

router.put('/:noteId(\\d+)', noteValidations, requireAuth, asyncHandler(async(req, res) =>{
  const id = paseInt(req.params.noteId,10)

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


router.delete('/:noteId(\\d+)', requireAuth, asyncHandler(async(req, res) =>{

  const id = req.params.noteId;

  const deleteNote = await Note.findByPk(id);

  if(deleteNote.trashed){
    await deleteNote.destroy();
  } else {
    deleteNote.trashed = true;
    await deleteNote.save();
  }

  return res.json(deleteNote)
}))



module.exports = router;
