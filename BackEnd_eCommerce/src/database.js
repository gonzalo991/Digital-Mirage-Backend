const mongosse = require('mongoose');
require('dotenv').config();

mongosse.connect(process.env.MONGO_URL)
    .then(()=> console.log('Conectado a MongoDB Atlas'))
    .catch((error)=> console.log(error))