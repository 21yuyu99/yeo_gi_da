const Sequelize = require('sequelize');
var models = require('..');

//var fs = require('fs');

//const multer = require('multer');
//const upload = multer({dest: './upload'})


module.exports = ((sequelize, DataTypes) => {
    var schema = sequelize.define('register', {
        title:{
            type: Sequelize.TEXT,
            allowNull : false,

        },
        picture: {
            type: Sequelize.TEXT,
            allowNull : false,
        },

        intro:{
            type: Sequelize.TEXT,
            allowNull : false,
        },

        tips:{
            type: Sequelize.TEXT,
            allowNull : false,
        },
    },  {
        
            timestamps: true,
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        });
    
        return schema;
    })
