const message = require('../urils/message')
const createModule = require('../modules/create')

function create(req,res,next){
    if (req.body.title == null) return res.send(message['404_NOT_FOUND'])
    else if (typeof(req.body.title) !== 'string') return res.send(message['404_BAD_REQUEST'])

    if (req.body.intro == null) return res.send(message['404_NOT_FOUND'])
    else if (typeof(req.body.intro) !== 'string') return res.send(message['404_BAD_REQUEST'])

    if (req.body.tips == null) return res.send(message['404_NOT_FOUND'])
    else if (typeof(req.body.tips) !== 'string') return res.send(message['404_BAD_REQUEST'])

    createModule.create(req.body.title,req.body.picture,req.boddy.intro,req.body.tips).then(response => {
        return res.status(response.status).send(response)
    }).catch(error => {
        if (error.status == null) return res.status(message['500_INTERNAL_SERVER_ERROR'].status).send(message['500_INTERNAL_SERVER_ERROR'])
        else return res.status(error.status).send(error)
    })





}

module.exports = {
    create,
}