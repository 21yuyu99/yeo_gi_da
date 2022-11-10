const router = require('express').Router();
const message = require('../../../../utils/message')
const authMiddleware = require('../../../../middlewares/auth').checkToken;
const boardController = require('../../../../controllers/board')

router.get('/:board_id', authMiddleware, boardController.showDetail)


module.exports = router