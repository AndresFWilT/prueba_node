"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Departamento_1 = require("./entities/Departamento");
const Empleado_1 = require("./entities/Empleado");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    port: 5432,
    database: 'prueba_node',
    entities: [Departamento_1.Departamento, Empleado_1.Empleado],
    logging: true
});
