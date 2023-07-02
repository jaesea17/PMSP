"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../../config/database.config"));
class AdminsInstance extends sequelize_1.Model {
}
exports.AdminsInstance = AdminsInstance;
AdminsInstance.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: database_config_1.default,
    tableName: 'admins'
});
//Establishing the one to many relationship
// StationsInstance.hasMany(PetrolInstance, { foreignKey: 'stationId', as: 'petrol' });
// PetrolInstance.belongsTo(StationsInstance, { foreignKey: 'stationId' });
