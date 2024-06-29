const express = require('express');
const { Pool } = require('pg');
const cors = require('cors'); // Requiere el paquete cors
const app = express();
const port = 3000;
app.use(cors()); // Habilita CORS para todas las rutas

// Configuración de la conexión a la base de datos
const pool = new Pool({
  connectionString: 'postgres://bzvpsdcz:0RmfG9N5OyThBp8SC1oxQEnGin-bNjx5@isabelle.db.elephantsql.com/bzvpsdcz',
  ssl: {
    rejectUnauthorized: false,
  },
});

// API para listar clientes
app.get('/clientes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clientes');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de clientes' });
  }
});

// API para listar empleados
app.get('/empleados', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM empleados');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de empleados' });
  }
});

// API para listar productos
app.get('/productos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM productos');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de productos' });
  }
});

// API para insertar un nuevo registro
router.post('/clientes', async (req, res) => {
  try {
    const { nombre, direccion, telefono } = req.body;
    const result = await db.pool.query(
      'INSERT INTO clientes (nombre, apellido, telefono) VALUES ($1, $2, $3) RETURNING *',
      [nombre, direccion, telefono]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al insertar el cliente' });
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
