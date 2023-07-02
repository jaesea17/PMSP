import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config'
import { PetrolInstance } from '../commodities/petrolModel';

interface StationsAttributes {
    id: string,
    name: string
}

export class StationsInstance extends Model<StationsAttributes>{ }

StationsInstance.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: db,
    tableName: 'stations'
})

//Establishing the one to many relationship
StationsInstance.hasMany(PetrolInstance, { foreignKey: 'stationId', as: 'commodity' });
PetrolInstance.belongsTo(StationsInstance, { foreignKey: 'stationId', as: "station" });