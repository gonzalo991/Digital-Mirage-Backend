"use strict";

var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Cambiar el puerto de 8080 a 3055
var port = 3055;
_app["default"].listen(port, function () {
  console.log("App listening on port ".concat(port));
});