"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetrolInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../../config/database.config"));
class PetrolInstance extends sequelize_1.Model {
}
exports.PetrolInstance = PetrolInstance;
PetrolInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    isAvailable: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    stationId: {
        type: sequelize_1.DataTypes.UUIDV4,
        allowNull: false
    },
}, {
    sequelize: database_config_1.default,
    tableName: 'petrol'
});
