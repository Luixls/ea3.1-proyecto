const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/UsuarioController");
const { verificarTokenYRol } = require("../middlewares/authMiddleware");
const {
  validarRegistroUsuario,
  validarUsuario,
} = require("../middlewares/validacionMiddleware");

// Solo el director puede agregar usuarios
router.post(
  "/registro",
  validarRegistroUsuario,
  verificarTokenYRol(["Director"]),
  UsuarioController.registro
);

router.post("/login", validarUsuario, UsuarioController.login);

module.exports = router;
