const router = require('express').Router();
const message = require('../../../../utils/message')
const authMiddleware = require('../../../../middlewares/auth').checkToken;
const matchController = require('../../../../controllers/board')

router.get('/:board_id', authMiddleware, matchController.showDetail)

module.exports = router