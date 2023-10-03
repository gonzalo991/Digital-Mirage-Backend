const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://StoneReadDL:LHYrMGwNoPLQIVRT@stone.wtobymf.mongodb.net/DigitalMirageDB?retryWrites=true&w=majority';

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((error) => console.error('Error al conectar a MongoDB Atlas:', error));
