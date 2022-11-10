const router = require('express').Router();
const message = require('../../../utils/message')

const detailRouter = require('./detail/index')
const createRouter = require('./create/index')

router.use('/detail', detailRouter)
router.use('/create', createRouter)

module.exports = router