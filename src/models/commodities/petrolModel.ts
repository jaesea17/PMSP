import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config'
import { StationsInstance } from '../stations/stationsModel';

interface PetrolAttributes {
    id: string,
    price: number
    isAvailable: boolean,
    likes: number
    stationId: string,
}

export class PetrolInstance extends Model<PetrolAttributes>{ }

PetrolInstance.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isAvailable: {
        type: DataTypes.BOOLEAN
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false
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
// PetrolInstance.belongsTo(StationsInstance, { foreignKey: 'stationId' });