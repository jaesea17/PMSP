import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config'

interface ObservAttributes {
    id: string,
    price: number,
    queue: string,
    likes: number,
    userId: string,
    commodityId: string,
}

export class ObservInstance extends Model<ObservAttributes>{ }

ObservInstance.init({
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
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    commodityId: {
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