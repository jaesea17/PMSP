import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config'

interface ObservAttributes {
    id: string,
    price: number,
    queue: string
}

export class UsersInstance extends Model<ObservAttributes>{ }

UsersInstance.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    queue: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'observations'
})

//Establishing the one to many relationship
// StationsInstance.hasMany(PetrolInstance, { foreignKey: 'stationId', as: 'petrol' });
// PetrolInstance.belongsTo(StationsInstance, { foreignKey: 'stationId' });