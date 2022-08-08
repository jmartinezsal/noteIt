const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage("Please provide an email.")
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .isLength({min: 4, max: 12})
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username').not().isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true, isLength: { min: 6 } })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];


// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);

router.put(
  '/scratchPad',
  asyncHandler(async(req, res) =>{
    const {scratchPad} = res.body;
    const user = await User.findByPk(req.user.id);
    user.scratchPad = scratchPad;

    await user.save();

    return "Scratch Pad has been saved!"
  })
)

module.exports = router;
