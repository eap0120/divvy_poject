'use strict';
module.exports = (sequelize, DataTypes) => {
  const stations = sequelize.define('STATIONS', {
    station_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.VARCHAR,
    },
    latitude: {
      type: DataTypes.DECIMAL,
    },
    longitude: {
      type: DataTypes.DECIMAL,
    },
    dp_capacity: {
      type: DataTypes.INTEGER,
    },
    landmark: { type :
      DataTypes.INTEGER,
    },
    online_date: {
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: (models) => {
        stations.hasMany(models.TRIPS, {
          foreingKey: 'from_station_id',
          as: 'trips',
        });
      },
    },
  });
  return stations;
};