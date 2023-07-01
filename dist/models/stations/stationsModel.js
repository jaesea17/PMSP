"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationsInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../../config/database.config"));
const petrolModel_1 = require("../commodities/petrolModel");
class StationsInstance extends sequelize_1.Model {
}
exports.StationsInstance = StationsInstance;
StationsInstance.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: database_config_1.default,
    tableName: 'stations'
});
//Establishing the one to many relationship
StationsInstance.hasMany(petrolModel_1.PetrolInstance, { foreignKey: 'stationId', as: 'petrol' });
petrolModel_1.PetrolInstance.belongsTo(StationsInstance, { foreignKey: 'stationId', as: "station" });
