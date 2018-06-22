const Sequelize = require('sequelize');
const config = require('./config');


// Sequelize对象，指定数据库和连接池的大小
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
})

// 表映射关系
const Pets = sequelize.define('pets', {
    id: {
        type: Sequelize.STRING(255),
        primaryKey: true
    },
    name: Sequelize.STRING(30),
    birth: Sequelize.DATE
}, {
    timestamps: false
})

module.exports = Pets;