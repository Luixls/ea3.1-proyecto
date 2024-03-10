const { body, validationResult } = require("express-validator");

// Validar profesores (agregar)
const validarProfesor = [
  body("Nombre")
    .notEmpty()
    .withMessage("El nombre del profesor es obligatorio."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errores: errors.array() });
    }
    next();
  },
];

// Validar secciones (agregar)
const validarSeccion = [
  body("Nombre")
    .notEmpty()
    .withMessage("El nombre de la sección es obligatorio."),
  body("ID_Materia")
    .isNumeric()
    .withMessage("El ID de la materia debe ser numérico."),
  body("ID_Materia")
    .notEmpty()
    .withMessage("El ID de la materia es obligatorio."),
  body("ID_Profesor")
    .isNumeric()
    .withMessage("El ID del profesor debe ser numérico."),
  body("ID_Profesor")
    .notEmpty()
    .withMessage("El ID del profesor es obligatorio."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errores: errors.array() });
    }
    next();
  },
];

module.exports = { validarSeccion, validarProfesor };
