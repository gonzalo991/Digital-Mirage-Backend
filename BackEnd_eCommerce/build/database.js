"use strict";

var _mongoose = require("mongoose");
var mongoURL = 'mongodb+srv://StoneReadDL:LHYrMGwNoPLQIVRT@stone.wtobymf.mongodb.net/DigitalMirageDB?retryWrites=true&w=majority';
(0, _mongoose.connect)(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log('Conectado a MongoDB Atlas');
})["catch"](function (error) {
  return console.error('Error al conectar a MongoDB Atlas:', error);
});