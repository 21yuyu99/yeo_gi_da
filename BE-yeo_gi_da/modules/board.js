const { response } = require('express');
const { sequelize, Sequelize } = require('../models');
const models = require('../models');
const message = require('../utils/message');

function create(_name,_picture,_intro,_category,_tip,_location){

    return new Promise((resolve,reject)=>{

        models.board.create({
            travel_name: _name,
            travel_picture: _picture,
            travel_intro: _intro,
            travel_category: _category,
            travel_tip: _tip,
            travel_location: _location,
        }).then(response =>{
            if(response != null){
                return resolve(message['200_OK'])
            }
            else{
                return reject(message['404_NOT_FOUND'])
            }
        }).catch(error => {
            return reject(message['500_INTERNAL_SERVER_ERROR'])
        })
    })
}

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
    create,
    showDetail,
}