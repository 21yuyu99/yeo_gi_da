const router = require('express').Router();
const message = require('../../../utils/message')

const detailRouter = require('./detail/index')
const createRouter = require('./create/index')
const commentRouter = require("./comment/index")

router.use('/detail', detailRouter)
router.use('/create', createRouter)
router.use('/comment', commentRouter);

module.exports = router