const sequelize = require('sequelize')
const connection = require('./database')
const usuario = connection.define('usuario')
id:{
    type: sequelize, integer;
    autoincrement: true
    PrimaryKey: true
    allownull: false
};

nome: {
    type: sequelize.string(100)
    allownull: false 
};
