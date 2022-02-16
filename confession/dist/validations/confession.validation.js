"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const createConfession = {
    body: joi_1.default.object().keys({
        title: joi_1.default.string().required(),
        content: joi_1.default.string().required(),
    }),
};
exports.default = { createConfession };
//# sourceMappingURL=confession.validation.js.map