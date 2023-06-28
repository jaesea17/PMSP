import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config'

interface StationsAttributes {
    id: string,
    name: string
}

export class StationsInstance extends Model<StationsAttributes>{ }

StationsInstance.init({
    id: {
        type: DataTypes.UUIDV4,
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