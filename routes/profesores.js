const express = require("express");
const router = express.Router();
const ProfesorController = require("../controllers/ProfesorController");
const { verificarTokenYRol } = require("../middlewares/authMiddleware"); // Ajusta la ruta según sea necesario

// No se requiere autenticación
router.get("/listar", ProfesorController.listar);

// Se requiere ser profesor o director
router.post(
  "/agregar",
  verificarTokenYRol(["Profesor", "Director"]),
  ProfesorController.agregar
);

router.put(
  "/editar/:id",
  verificarTokenYRol(["Director", "Profesor"]),
  (req, res, next) => {
    // Añadir una propiedad al objeto req para indicar si es profesor
    if (req.usuario.rol === "Profesor") {
      req.esProfesor = true; // Usaremos esta propiedad para decidir si mostramos el mensaje de advertencia
    }
    next();
  },
  ProfesorController.editar
);

// Solo el director puede eliminar
router.delete(
  "/eliminar/:id",
  verificarTokenYRol(["Director"]),
  ProfesorController.eliminar
);

module.exports = router;
