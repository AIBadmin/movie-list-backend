import {Sequelize} from 'sequelize';
import config from '../config/config.js';

const sequelize = new Sequelize(config.development.dbName,config.development.dbUsername,config.development.dbPassword,{
    host:config.development.dbHost,
    dialect:config.development.dbDialect,
    logger:false
})


await sequelize.authenticate()

let db ={}
db.sequelize= sequelize;
db.Sequelize=Sequelize;

import userModel from './userModel.js'
import userSessionModel from './userSessionModel.js'
import movieModel from './movieModel.js'

db.user = userModel(sequelize,Sequelize)
db.userSession = userSessionModel(sequelize,Sequelize)
db.movie = movieModel(sequelize,Sequelize)

db.user.hasMany(db.userSession,{foreignKey:'user_id'})
db.userSession.belongsTo(db.user,{foreignKey:'user_id'})

db.sequelize.sync({force:false})
export default db;
