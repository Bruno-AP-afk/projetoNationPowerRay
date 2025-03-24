const sequelize = require('require')
const connection = new sequelize('nomeDatabase', 'root', 'escola', {
    host:'localhost',
    dialect:'mysql',
    logging:'false'
});

module.export = connection;