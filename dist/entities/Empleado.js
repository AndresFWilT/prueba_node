"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
const typeorm_1 = require("typeorm");
const Departamento_1 = require("./Departamento");
let Empleado = class Empleado extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Empleado.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "character varying", precision: 9, unique: true }),
    __metadata("design:type", String)
], Empleado.prototype, "nif", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "character varying", precision: 100 }),
    __metadata("design:type", String)
], Empleado.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "character varying", precision: 100 }),
    __metadata("design:type", String)
], Empleado.prototype, "apellido1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "character varying", precision: 100 }),
    __metadata("design:type", String)
], Empleado.prototype, "apellido2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Empleado.prototype, "codigo_departamento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Departamento_1.Departamento, departamento => departamento.codigo, {
        onDelete: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)({ name: "codigo_departamento" }),
    __metadata("design:type", Departamento_1.Departamento)
], Empleado.prototype, "departamento", void 0);
Empleado = __decorate([
    (0, typeorm_1.Entity)('empleado')
], Empleado);
exports.Empleado = Empleado;
