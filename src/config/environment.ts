import dotenv from "dotenv";

dotenv.config();

//CONFIGURACION DE VARIABLE DE ENTORNO

export const environment = {
    DATABASE: {
      HOST: process.env.DB_HOST || 'localhost',
      PORT: parseInt(process.env.DB_PORT || '5432', 10),
      NAME: process.env.DB_NAME || 'example_db',
      USER: process.env.DB_USER || 'postgres',
      PASSWORD: process.env.DB_PASSWORD || 'password',
    },
  };
