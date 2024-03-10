const express = require("express");
const router = express.Router();
const EventoController = require("../controllers/EventoController");

router.get("/listar", EventoController.listar);
router.get(
  "/profesor/:idProfesor/:fechaInicio",
  EventoController.eventosFuturosProfesor
);
router.post("/agregar", EventoController.agregar);
router.put("/editar/:id", EventoController.editar);
router.delete("/eliminar/:id", EventoController.eliminar);

module.exports = router;
