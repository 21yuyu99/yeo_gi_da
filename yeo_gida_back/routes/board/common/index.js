const router = require('express').Router();
const message = require('../../../utils/message')

const createRouter = require('./create/index')
router.use('/create', createRouter)

module.exports = router