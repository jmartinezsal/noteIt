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
    .withMessage("Title must be at least 4 and 30 characters."),
  handleValidationErrors
]

router.get('/', requireAuth, asyncHandler(async(req,res) =>{
  const userId = parseInt(req.user.id, 10);

  const userNotebooks = await Notebook.findAll({
    include: {
      model: Note,
        where:{
        notebookId
      }
    },
    where:{
      userId
    }
  })
  return res.json(userNotebooks)
}));

router.post('/',notebookValidations, requireAuth, asyncHandler(async(req,res) =>{
  const userId = parseInt(req.user.id, 10);

  const { title, tags} = req.body();

  const newNotebook = await Notebook.create( userId, title, tags)

  return res.json(newNotebook);
}))

router.put('/:notebookId/edit',notebookValidations, requireAuth, asyncHandler(async(req, res) =>{
  const id = parseInt(req.params.notebookId)

  const { title, tags} = req.body();

  const editNotebook = await Notebook.update( title,tags,
    {
      where:{
        id,
        returning: true,
        plain: true
      }
    })

  return res.json(editNotebook)
}))


router.delete('/:notebookId/delete', requireAuth, asyncHandler(async(req, res) =>{

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
    deleteNotesFromNotebook.forEach(note => note[trashed] = true)
  }

  return res.json(deleteNotebook)
}))



module.exports = router;
