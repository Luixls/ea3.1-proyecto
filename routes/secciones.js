const express = require("express");
const router = express.Router();
const SeccionController = require("../controllers/SeccionController");
const { verificarTokenYRol } = require("../middlewares/authMiddleware");
const { validarAgregarSeccion, validarEditarSeccion } = require("../middlewares/validacionMiddleware");

// No se requiere autenticación
router.get("/listar", SeccionController.listar);

// Se requiere ser profesor o director
router.post(
  "/agregar",
  validarAgregarSeccion,
  verificarTokenYRol(["Profesor", "Director"]),
  SeccionController.agregar
);

// Se requiere ser profesor o director
router.put(
  "/editar/:id",
  validarEditarSeccion,
  verificarTokenYRol(["Director", "Profesor"]),
  (req, res, next) => {
    if (req.usuario.rol === "Profesor") {
      req.esProfesor = true; // Marcador para mostrar advertencia en la respuesta
    }
    next();
  },
  SeccionController.editar
);

// Solo el director puede eliminar
router.delete(
  "/eliminar/:id",
  verificarTokenYRol(["Director"]),
  SeccionController.eliminar
);

module.exports = router;
