"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../../config/database.config"));
class ObservInstance extends sequelize_1.Model {
}
exports.ObservInstance = ObservInstance;
ObservInstance.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    queue: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    likes: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    commodityId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: database_config_1.default,
    tableName: 'observations'
});
//Establishing the one to many relationship
// StationsInstance.hasMany(PetrolInstance, { foreignKey: 'stationId', as: 'petrol' });
// PetrolInstance.belongsTo(StationsInstance, { foreignKey: 'stationId' });
