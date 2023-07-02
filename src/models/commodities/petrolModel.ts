import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config'
import { StationsInstance } from '../stations/stationsModel';
import { ObservInstance } from '../userObservations/observationsModel';

interface PetrolAttributes {
    id: string,
    commodity: string,
    price: number
    isAvailable: boolean,
    stationId: string,
}

export class PetrolInstance extends Model<PetrolAttributes>{ }

PetrolInstance.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    commodity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isAvailable: {
        type: DataTypes.BOOLEAN
    },
    stationId: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: db,
    tableName: 'petrol'
})
//Establishing the one to many relationship
PetrolInstance.hasMany(ObservInstance, { foreignKey: 'commodityId', as: "observations" });
ObservInstance.belongsTo(PetrolInstance, { foreignKey: 'commodityId', as: "commodity" });