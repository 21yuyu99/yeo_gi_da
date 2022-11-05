const { response } = require('express');
const { sequelize, Sequelize } = require('../models');
const models = require('../models');
const message = require('../utils/message');

function showDetail(_board_id) {
    return new Promise((resolve, reject) => {
        models.match.findOne({
            where: {
                id: _board_id
            }
        }).then(response => {
            if (response != null){
                var successObj = Object.assign({}, message['200_OK'])
                successObj.boards = response.dataValues
                return resolve(successObj)
            }
            else return reject(message['404_NOT_FOUND'])
        }).catch(error => {
            return reject(message['500_INTERNAL_SERVER_ERROR'])
        })
    })
}

module.exports = {
    showDetail,
}