import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config'

interface PetrolAttributes {
    id: string,
    price: number
    isAvailable: boolean,
    stationId: string,
}

export class PetrolInstance extends Model<PetrolAttributes>{ }

PetrolInstance.init({
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    price: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    isAvailable: {
        type: DataTypes.BOOLEAN
    },
    stationId: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
}, {
    sequelize: db,
    tableName: 'petrol'
})