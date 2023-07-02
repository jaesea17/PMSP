"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../../config/database.config"));
const observationsModel_1 = require("../userObservations/observationsModel");
class UsersInstance extends sequelize_1.Model {
}
exports.UsersInstance = UsersInstance;
UsersInstance.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    userName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: database_config_1.default,
    tableName: 'users'
});
//Establishing the one to many relationship
UsersInstance.hasMany(observationsModel_1.ObservInstance, { foreignKey: 'userId', as: 'observations' });
observationsModel_1.ObservInstance.belongsTo(UsersInstance, { foreignKey: 'userId', as: "user" });
