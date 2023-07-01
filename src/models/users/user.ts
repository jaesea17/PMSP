import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config'

interface UsersAttributes {
    id: string,
    userName: string,
    password: string
}

export class UsersInstance extends Model<UsersAttributes>{ }

UsersInstance.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },

    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'users'
})

//Establishing the one to many relationship
// StationsInstance.hasMany(PetrolInstance, { foreignKey: 'stationId', as: 'petrol' });
// PetrolInstance.belongsTo(StationsInstance, { foreignKey: 'stationId' });