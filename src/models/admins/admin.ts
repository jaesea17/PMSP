import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config'

interface AdminsAttributes {
    id: string,
    name: string,
    email: string,
    password: string
}

export class AdminsInstance extends Model<AdminsAttributes>{ }

AdminsInstance.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
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
    tableName: 'admins'
})

//Establishing the one to many relationship
// StationsInstance.hasMany(PetrolInstance, { foreignKey: 'stationId', as: 'petrol' });
// PetrolInstance.belongsTo(StationsInstance, { foreignKey: 'stationId' });