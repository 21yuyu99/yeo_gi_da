const router = require('express').Router();
const message = require('../../../utils/message')

const detailRouter = require('./detail/index')
router.use('/detail', detailRouter)

module.exports = router