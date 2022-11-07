const router = require('express').Router();
const message = require('../../../../utils/message')
const boardController = require('../../../../controllers/create')

router.post('/',boardController.create)


module.exports = router