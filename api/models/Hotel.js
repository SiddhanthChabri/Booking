import {DataTypes} from 'sequelize';

export const createHotelModel = async (sequelize) =>{
    const Hotel = sequelize.define("Hotel", {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        distance:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        photos:{
            type: DataTypes.JSON,
            defaultValue: [],
        },
        title:{
            type: DataTypes.STRING,
            isNull: false
        },

        desc:{
            type: DataTypes.STRING,
            isNull: false
        },

        rating:{
            type: DataTypes.INTEGER,
            min: 0,
            max: 5,
        },
        rooms:{
            type: DataTypes.JSON,
            defaultValue: [],
        },
        cheapestPrice:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        featured:{
            type: DataTypes.BOOLEAN,
            default: false,
        }
    });
    return Hotel;
}

