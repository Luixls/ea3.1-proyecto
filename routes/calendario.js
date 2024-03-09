const express = require("express");
const router = express.Router();
const CalendarioController = require("../controllers/CalendarioController");

router.get(
  "/actividades/:trimestre/:semana",
  CalendarioController.actividadesSemana
);
router.post("/agregar", CalendarioController.agregar);
router.get("/listar", CalendarioController.listar);
router.put("/editar/:id", CalendarioController.editar);
router.delete("/eliminar/:id", CalendarioController.eliminar);

module.exports = router;
