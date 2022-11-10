const message = require('../utils/message')
const createModule = require('../modules/board')

function create(req,res,next){

    
    if (req.body.name == null)return res.send(message['404_NOT_FOUND'])
    else if (typeof(req.body.name) !== 'string') return res.send(message['404_BAD_REQUEST'])


   

    if (req.body.intro == null) return res.send(message['404_NOT_FOUND'])
    else if (typeof(req.body.intro) !== 'string') return res.send(message['404_BAD_REQUEST'])

    if (req.body.category == null) return res.send(message['404_NOT_FOUND'])
    else if (typeof(req.body.category) !== 'string') return res.send(message['404_BAD_REQUEST'])

    if (req.body.tip == null) return res.send(message['404_NOT_FOUND'])
    else if (typeof(req.body.tip) !== 'string') return res.send(message['404_BAD_REQUEST'])

    createModule.create(req.body.name,req.body.picture,req.body.intro,req.body.category,req.body.tip,req.body.location).then(response => {
        return res.status(response.status).send(response)
    }).catch(error => {
        if (error.status == null) return res.status(message['500_INTERNAL_SERVER_ERROR'].status).send(message['500_INTERNAL_SERVER_ERROR'])
        else return res.status(error.status).send(error)
    })

}

function showDetail(req, res, next) {
    if (req.id == null) return res.send(message['404_NOT_FOUND'])
    else if (typeof Number(req.params.board_id) !== 'number') return res.send(message['400_BAD_REQUEST'])
    createModule.showDetail(Number(req.params.board_id)).then(response => {
        return res.status(response.status).send(response)
    }).catch(error => {
        console.log(error)
        if (error.status == null) return res.status(message['500_INTERNAL_SERVER_ERROR'].status).send(message['500_INTERNAL_SERVER_ERROR'])
        else return res.status(error.status).send(error)
    })
}

module.exports = {
    create,
    showDetail,
}