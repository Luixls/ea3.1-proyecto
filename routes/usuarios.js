const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/UsuarioController");
const {
  validarRegistroUsuario,
  validarUsuario,
} = require("../middlewares/validacionMiddleware");

// Solo el director puede agregar usuarios
router.post("/registro", validarRegistroUsuario, UsuarioController.registro);

router.post("/login", validarUsuario, UsuarioController.login);

module.exports = router;
