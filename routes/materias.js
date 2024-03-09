const express = require("express");
const router = express.Router();
const MateriaController = require("../controllers/MateriaController");

router.post("/agregar", MateriaController.agregar);
router.get("/listar", MateriaController.listar);
router.put("/editar/:id", MateriaController.editar);
router.delete("/eliminar/:id", MateriaController.eliminar);

module.exports = router;
