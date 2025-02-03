import { DataTypes } from 'sequelize';

export const createRoomModel = (sequelize) => {
  const Room = sequelize.define("Room", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    maxPeople: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    roomNumbers: {
      type: DataTypes.JSONB, // or DataTypes.JSONB for PostgreSQL
      allowNull: false,
      defaultValue: [],
      validate: {
        isValidFormat(value) {
          if (!Array.isArray(value)) {
            throw new Error('roomNumbers must be an array');
          }
          value.forEach(item => {
            if (!item.number || typeof item.number !== 'number') {
              throw new Error('Each room number must have a numeric "number"');
            }
            if (!Array.isArray(item.unavailableDates)) {
              throw new Error('unavailableDates must be an array of dates');
            }
          });
        }
      }
    }
  }, {
    timestamps: true
  });

  return Room;
};