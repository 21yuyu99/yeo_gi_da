const router = require('express').Router();
const message = require('../../../utils/message')

const detailRouter = require('./detail/index')
const createRouter = require('./create/index')
const listRouter = require("./list/index")

router.use('/detail', detailRouter)
router.use('/create', createRouter)
router.use('/list', listRouter);

module.exports = router