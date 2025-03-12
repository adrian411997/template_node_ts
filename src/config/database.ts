import { Sequelize } from 'sequelize';
import { environment } from './environment';

//CONFIGURACION PARA CONECTAR CON BASE DE DATOS LOCAL

const { HOST, PORT, NAME, USER, PASSWORD } = environment.DATABASE;

export const sequelize = new Sequelize(NAME, USER, PASSWORD, {
  host: HOST,
  port: PORT,
  dialect: 'postgres',
  define: {
    timestamps: false,
  },
  logging: false,
});