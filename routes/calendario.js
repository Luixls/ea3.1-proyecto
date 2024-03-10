const express = require("express");
const router = express.Router();
const CalendarioController = require("../controllers/CalendarioController");
const { verificarTokenYRol } = require("../middlewares/authMiddleware");

// No se requiere autenticación
router.get("/listar", CalendarioController.listar);
router.get(
  "/actividades/:trimestre/:semana",
  CalendarioController.actividadesSemana
);

// Solo el director puede agregar trimestres
router.post(
  "/agregar",
  verificarTokenYRol(["Director"]),
  CalendarioController.agregar
);

// Solo el director puede editar trimestres
router.put(
  "/editar/:id",
  verificarTokenYRol(["Director"]),
  CalendarioController.editar
);

// Solo el director puede eliminar
router.delete(
  "/eliminar/:id",
  verificarTokenYRol(["Director"]),
  CalendarioController.eliminar
);

module.exports = router;
