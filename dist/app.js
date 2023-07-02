"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes/userRoutes"));
const theRouter_1 = __importDefault(require("./routes/adminRoutes/theRouter"));
const observationRoutes_1 = __importDefault(require("./routes/observationRoutes/observationRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const database_config_1 = __importDefault(require("./config/database.config"));
database_config_1.default.sync({ force: false }).then(() => {
    console.log("connected successfully to database");
});
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use("/api", userRoutes_1.default);
app.use("/api/admin", theRouter_1.default);
app.use("/api/observation", observationRoutes_1.default);
exports.default = app;
