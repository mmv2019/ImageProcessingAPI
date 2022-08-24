"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
var port = 3000;
app.use('/api', index_1.default);
app.get('/', function (_, res) {
    res.status(200).send('Server is working!');
});
app.listen(port, function () {
    var NewPath = path_1.default.resolve(__dirname, '../assets/New');
    if (!fs_1.default.existsSync(NewPath)) {
        fs_1.default.mkdirSync(NewPath);
    }
    console.log("Running on port ".concat(port));
});
exports.default = app;
