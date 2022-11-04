const {response} = require('express');
const { sequelize, Sequelize } = require('../models');
const models = require('../models');

function create(_title,_picture,_intro,_tip){
    return new Promise((resolve, reject) =>{
        models.register.create({
            title : _title,
            picture : _picture,
            into : _intro,
            tip : _tip
        }).then(response =>{

            if(response != null){
                return resolve(message['200_OK'])
            }
            else return reject(message['404_NOT_FOUND'])

        }).catch(error => {
            return reject(message['500_INTERNAL_SERVER_ERROR'])
        })
    })
}

module.exports = {
    create
}