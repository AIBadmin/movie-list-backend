export default (sequelize,Sequelize)=>{
    const User = sequelize.define(
        'users',{
            id:{
                type:Sequelize.INTEGER(),
                autoIncrement:true,
                allowNull:false,
                primaryKey:true
            },
            firstName:{
                type:Sequelize.STRING(),
                allowNull:true
            },
            lastName:{
                type:Sequelize.STRING(),
                allowNull:true
            },
            email:{
                type:Sequelize.STRING(),
                allowNull:false
            },
            password:{
                type:Sequelize.STRING(),
                allowNull:false
            },
        },
        {
            tableName:'users'
        }
    )
    return User;
}
