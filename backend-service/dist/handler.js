"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Root path handler
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hello from root!",
    });
});
// Boilerplate path handler - modified to handle both with and without the base path
app.get("/endpoint1", (req, res) => {
    return res.status(200).json({
        message: "Hello from Endpoint 1!",
    });
});
// Boilerplate path handler - modified to handle both with and without the base path
app.get("/endpoint2", (req, res) => {
    return res.status(200).json({
        message: "Hello from Endpoint 2!",
    });
});
// Use this for unhandled routes
app.use((req, res) => {
    console.log(`No route found for: ${req.method} ${req.path}`);
    return res.status(404).json({
        error: "Not Found",
    });
});
// Configure serverless-http to handle base path mapping
exports.handler = (0, serverless_http_1.default)(app, {
    basePath: process.env.BASE_PATH || "",
    requestId: "true"
});
//# sourceMappingURL=handler.js.map