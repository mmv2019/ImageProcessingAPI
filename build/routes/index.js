"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var RouteImage_1 = __importDefault(require("./api/RouteImage"));
var routes = express_1.default.Router();
routes.use('/imageAPI', RouteImage_1.default);
exports.default = routes;
