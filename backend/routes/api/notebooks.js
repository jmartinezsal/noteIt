const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const {Notebook, Note} = require('../../db/models');


const router = express.Router();

const notebookValidations = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a title to create a notebook.")
    .exists({isLength:{min: 4, max:30}})
    .withMessage("Title must be between 4 to 30 characters."),
  handleValidationErrors
]

//Get all the notebooks that belong to the user
router.get('/', requireAuth, asyncHandler(async(req,res) =>{
  const userId = req.user.id;

  const userNotebooks = await Notebook.findAll({
    include: [{model: Note}],
    where:{
      userId
    }
  })
  return res.json(userNotebooks)
}));

//Get one specific notebook that belongs to the user
router.get('/:notebookId(\\d+)', requireAuth, asyncHandler(async(req,res) =>{
  const userId = req.user.id;
  const id = req.params.notebookId;

  const userNotebooks = await Notebook.findOne( {
    include: [{model: Note}],
    where:{
      id,
      userId
    }
  })
  return res.json(userNotebooks)
}));


router.post('/', notebookValidations, requireAuth, asyncHandler(async(req,res) =>{
  const userId = req.user.id;

  const {title, trashed} = req.body;

  const newNotebook = await Notebook.create( {userId, title, trashed});

  return res.json(newNotebook);
}))


router.put('/:notebookId(\\d+)',notebookValidations, requireAuth, asyncHandler(async(req, res) =>{
  const id = parseInt(req.params.notebookId)

  const { title, trashed} = req.body;

  const editNotebook = await Notebook.update( {title, trashed},
    {
      where:{id},
      returning: true,
      plain: true
    })

  return res.json(editNotebook)
}))


router.delete('/:notebookId(\\d+)', requireAuth, asyncHandler(async(req, res) =>{
  const id = parseInt(req.params.notebookId);

  const deleteNotebook = await Notebook.findByPk(id);
  const deleteNotesFromNotebook= await Note.findAll({where:{
    notebookId: deleteNotebook.id
  }}
  )
  if(deleteNotebook.trashed){
    await deleteNotesFromNotebook.forEach(note => note.destroy());
    await deleteNotebook.destroy();
  } else {
      deleteNotebook.trashed = true;
      if(deleteNotesFromNotebook.length > 0){
        deleteNotesFromNotebook.forEach(async note => {
          note.trashed = true
          await note.save();
        })
      }
      await deleteNotebook.save();
    }

  return res.json(deleteNotebook)
}))



module.exports = router;
