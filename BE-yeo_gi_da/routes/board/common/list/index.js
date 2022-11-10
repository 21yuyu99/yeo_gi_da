const router = require('express').Router();
const message = require('../../../../utils/message')
const boardController = require('../../../../controllers/board')

router.get('/',  boardController.getBoardList)


module.exports = router