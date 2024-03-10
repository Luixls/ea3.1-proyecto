const express = require("express");
const router = express.Router();
const MateriaController = require("../controllers/MateriaController");

router.get("/listar", MateriaController.listar);
router.post("/agregar", MateriaController.agregar);
router.put("/editar/:id", MateriaController.editar);
router.delete("/eliminar/:id", MateriaController.eliminar);

module.exports = router;
