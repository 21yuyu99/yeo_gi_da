const Sequelize = require('sequelize');
var models = require('..');


module.exports = ((sequelize, DataTypes) => {
    var schema = sequelize.define('users', {
        u_id : {
            type: Sequelize.TEXT,
            allowNull : false,
        },

        u_pw : {
            type: Sequelize.TEXT,
            allowNull : false,
        },

        name: {
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
