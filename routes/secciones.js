const express = require("express");
const router = express.Router();
const SeccionController = require("../controllers/SeccionController");

router.post("/agregar", SeccionController.agregar);
router.get("/listar", SeccionController.listar);
router.put("/editar/:id", SeccionController.editar);
router.delete("/eliminar/:id", SeccionController.eliminar);

module.exports = router;
