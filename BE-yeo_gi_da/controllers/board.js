const message = require('../utils/message')
const matchModule = require('../modules/board')

function showDetail(req, res, next) {
    if (req.id == null) return res.send(message['404_NOT_FOUND'])
    else if (typeof Number(req.params.board_id) !== 'number') return res.send(message['400_BAD_REQUEST'])
    matchModule.showDetail(Number(req.params.board_id)).then(response => {
        return res.status(response.status).send(response)
    }).catch(error => {
        console.log(error)
        if (error.status == null) return res.status(message['500_INTERNAL_SERVER_ERROR'].status).send(message['500_INTERNAL_SERVER_ERROR'])
        else return res.status(error.status).send(error)
    })
}

module.exports = {
    showDetail,
}