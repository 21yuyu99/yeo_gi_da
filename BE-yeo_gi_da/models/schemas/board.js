const Sequelize = require('sequelize');
var models = require('..');

module.exports = ((sequelize, DataTypes) => {

    var schema = sequelize.define('board', {
        travel_destination_name: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        travel_destination_detail: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        travel_destination_category: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        travel_destination_tip: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        travel_destination_location: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
    });
    
    return schema;
})