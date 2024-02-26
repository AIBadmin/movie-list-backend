import dotenv from 'dotenv';
dotenv.config();

const config={
    port:process.env.PORT,
    development:{
        dbName:process.env.DB_NAME,
        dbUsername:process.env.DB_USERNAME,
        dbHost:process.env.DB_HOST,
        dbPassword:process.env.DB_PASSWORD,
        dbDialect:process.env.DB_DIALECT
    },
    jwt:{
        secretKey: process.env.JWT_SECRET_KEY || 'rLfvH3rnmF4DcXyjwS6SNy0mkAr161EYN9bNflHJzl6QNmkfgs9YgVhgNtv7Q/+m',
        expiryTime:process.env.JWT_EXPIRY
    },
  static_url: process.env.STATIC_PATH || 'http://localhost:3000',

}

export default config;
