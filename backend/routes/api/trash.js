const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const {Notebook, Note} = require('../../db/models');


const router = express.Router();

router.get('/', requireAuth, asyncHandler(async (req,res) =>{
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



module.exports = router;
