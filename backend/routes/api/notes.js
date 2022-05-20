const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const {Note} = require('../../db/models');


const router = express.Router();

router.get('/', requireAuth, asyncHandler(async(req,res) =>{
  const userId = parseInt(req.user.id, 10);

  const userNotes = await Note.findAll({
    where:{
      userId
    }
  })
  return res.json(userNotes)
}));

router.post('/', requireAuth, asyncHandler(async(req,res) =>{
  const userId = parseInt(req.user.id, 10);

  const { notebookId, header, content} = req.body();

  const newNote = await Image.create( userId, notebookId, header, content)

  return res.json(newNote);
}))

router.put('/:noteId/edit', requireAuth, asyncHandler(async(req, res) =>{
  const id = parseInt(req.params.noteId)

  const { notebookId, header, content} = req.body;

  const editNote = await Image.update( notebookId, header, content,
    {
      where:{
        id,
        returning: true,
        plain: true
      }
    })

  return res.json(editNote)
}))


router.delete('/:noteId/delete', requireAuth, asyncHandler(async(req, res) =>{

  const id = parseInt(req.params.noteId);

  const deleteNote = await Note.findByPk(id);

  if(deleteNote.trashed){
    await deleteNote.destroy();
  } else {
    deleteNote.trashed = true;
  }

  return res.json(deleteNote)
}))



export default router;
