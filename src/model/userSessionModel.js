export default (sequelize,Sequelize)=>{
    const UserSession = sequelize.define(
        'userSessions',{
            id:{
                type:Sequelize.INTEGER(),
                allowNull:false,
                autoIncrement:true,
                primaryKey:true
            },
            user_id:{
                type:Sequelize.INTEGER(),
                allowNull:false,
                references:{
                    model:'users',
                    key:'id'
                }
            },
            token:{
                type:Sequelize.STRING(),
                allowNull:false
            }
        },{
            tableName:'userSessions'
        }
    )
    return UserSession;
}
