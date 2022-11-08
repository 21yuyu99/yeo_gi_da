const Sequelize = require('sequelize');
var models = require('..');

//var fs = require('fs');

//const multer = require('multer'); 파일을 저장해주고 경로를 req
//const upload = multer({dest: './upload'})

// blob 데베에 그대로 끼워 넣으면 파일을 있는것처럼 인식?

// 개소리야

// 기본적으로는 http 타입중에 멀티파트폼이라는 걸로 파일을 싫어서 

// 멀터로 우리 서버에 저장을 시킨 다음에 경로를 저장

// 

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

        cate:{
            type: Sequelize.TEXT.apply,
            allowNull : false,
        }
    },  {
        
            timestamps: true,
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        });
    
        return schema;
    })
