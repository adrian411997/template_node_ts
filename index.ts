import {sequelize} from "./src/config/database"
import express from 'express';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();

    const app = express();

    app.get('/', (_req,res) => {
      res.send('¡Servidor funcionando!');
    });

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
};

startServer();
    