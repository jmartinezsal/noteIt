const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const {Notebook, Note} = require('../../db/models');


const router = express.Router();

router.get('/', requireAuth, asyncHandler(async (req,res) =>{
  const userId = req.user.id;

  const trash = await Note.findAll({
    include: [
    {
      model: Notebook,
      where: { userId },
    }],
    where:{
      trashed: true
    }
  })

  return res.json(trash)

}))



router.delete('/:noteId(\\d+)', requireAuth, asyncHandler(async(req, res) =>{

  const id = parseInt(req.params.noteId,10);

  const deleteNote = await Note.findByPk(id);
  await deleteNote.destroy();
  return res.json(deleteNote.id)
}))



module.exports = router;
