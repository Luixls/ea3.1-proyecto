const mysql = require("mysql");
const dbConfig = require("../dbConfig");

class SeccionController {
  // Método para agregar una nueva sección
  static async agregar(req, res) {
    const { Nombre, ID_Materia, ID_Profesor } = req.body;
    const sql = "INSERT INTO secciones (Nombre, ID_Materia, ID_Profesor) VALUES (?, ?, ?)";
    try {
      await dbQuery(sql, [Nombre, ID_Materia, ID_Profesor]);
      res.json({ mensaje: "Sección agregada con éxito" });
    } catch (error) {
      console.error("Error al agregar sección:", error);
      res.status(500).json({ error: "Error al agregar sección" });
    }
  }

  // Método para obtener todas las secciones
  
  static async listar(req, res) {
    const sql = "SELECT * FROM secciones";
    try {
      const secciones = await dbQuery(sql);
      res.json(secciones);
    } catch (error) {
      console.error("Error al obtener secciones:", error);
      res.status(500).json({ error: "Error al obtener secciones" });
    }
  }

  // Método para editar una sección existente

  static async editar(req, res) {
    const { id } = req.params;
    const { Nombre, ID_Materia, ID_Profesor } = req.body;
    const sql = "UPDATE secciones SET Nombre = ?, ID_Materia = ?, ID_Profesor = ? WHERE ID = ?";
    try {
      await dbQuery(sql, [Nombre, ID_Materia, ID_Profesor, id]);
      res.json({ mensaje: "Sección editada con éxito" });
    } catch (error) {
      console.error("Error al editar sección:", error);
      res.status(500).json({ error: "Error al editar sección" });
    }
  }

  // Método para eliminar una sección existente

  static async eliminar(req, res) {
    const { id } = req.params;
    const sql = "DELETE FROM secciones WHERE ID = ?";
    try {
      await dbQuery(sql, [id]);
      res.json({ mensaje: "Sección eliminada con éxito" });
    } catch (error) {
      console.error("Error al eliminar sección:", error);
      res.status(500).json({ error: "Error al eliminar sección" });
    }
  }
}

// Función de utilidad para ejecutar consultas SQL

function dbQuery(sql, params = []) {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(dbConfig);
    connection.query(sql, params, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      connection.end();
      resolve(results);
    });
  });
}

module.exports = SeccionController;
