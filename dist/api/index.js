"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// api/index.ts
const main_1 = __importDefault(require("../main")); // Importa tu app Express existente
exports.default = main_1.default; // Exporta para Vercel
