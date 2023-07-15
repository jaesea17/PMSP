import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config'
import { ObservInstance } from '../userObservations/observationsModel';

interface UsersAttributes {
    id: string,
    userName: string,
    email: string,
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
    email: {
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
UsersInstance.hasMany(ObservInstance, { foreignKey: 'userId', as: 'observations' });
ObservInstance.belongsTo(UsersInstance, { foreignKey: 'userId', as: "user" });