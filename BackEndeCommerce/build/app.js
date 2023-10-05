"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _package = _interopRequireDefault(require("../package.json"));
require("./database");
var _initrialSetup = require("./libs/initrialSetup");
var _user = _interopRequireDefault(require("./routes/user.routes"));
var _categorias = _interopRequireDefault(require("./routes/categorias.router"));
var _producto = _interopRequireDefault(require("./routes/producto.router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var cors = require('cors');

//import archivo rutas

//
var app = (0, _express["default"])();
// app.use(cors({
//     origin:"*"
// }));
app.use(function (req, res, next) {
  res.setHeader('Acces-Control-Allow-Origin', '*');
  res.setHeader('Acces-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Acces-Control-Allow-Headers', 'Content-Type');
  next();
});
(0, _initrialSetup.createRoles)(); //inicializa roles
(0, _initrialSetup.createCategoria)(); //inicializa categorias
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
;
app.get('/', function (req, res) {
  res.json({
    "name": _package["default"].name,
    "version": _package["default"].version,
    "description": _package["default"].description,
    "author": _package["default"].author
  });
});

//llamo a la rutas
app.use('/user', _user["default"]);
_categorias["default"];
app.use('/categorias', _categorias["default"]);
app.use('/productos', _producto["default"]);
//
var _default = exports["default"] = app;