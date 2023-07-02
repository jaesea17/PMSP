"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetrolInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../../config/database.config"));
const observationsModel_1 = require("../userObservations/observationsModel");
class PetrolInstance extends sequelize_1.Model {
}
exports.PetrolInstance = PetrolInstance;
PetrolInstance.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    commodity: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    isAvailable: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    stationId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: database_config_1.default,
    tableName: 'petrol'
});
//Establishing the one to many relationship
PetrolInstance.hasMany(observationsModel_1.ObservInstance, { foreignKey: 'commodityId', as: "observations" });
observationsModel_1.ObservInstance.belongsTo(PetrolInstance, { foreignKey: 'commodityId', as: "commodity" });
