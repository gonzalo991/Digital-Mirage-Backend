import 'dotenv/config';

export default{
    SECRET: process.env.SECRET,
    HOST: process.env.HOST || "0.0.0.0",
    PORT: process.env.PORT || 3000,
    DB_URI: process.env.DB_URI
} 