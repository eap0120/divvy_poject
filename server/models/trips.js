'use strict';
module.exports = (sequelize, DataTypes) => {
  const trips = sequelize.define('TRIPS', {
    
    trip_id: {
      type: DataTypes.INTEGER,
    },
    start_time: {
     type: DataTypes.DATE,
    },
    stop_time: {
      type: DataTypes.DATE,
    },
    bike_id: {
      type: DataTypes.INTEGER,
    },
    trip_duration: {
      type: DataTypes.INTEGER,
    },
    from_station_id: {
      type: DataTypes.INTEGER,
    },
    from_station_name: {
      type: DataTypes.VARCHAR,
    },
    to_station_id: {
      type: DataTypes.INTEGER,
    },
    to_station_name: {
      type: DataTypes.VARCHAR,
    },
    user_type: {
      type: DataTypes.VARCHAR,
    },
    gender: {
      type: DataTypes.VARCHAR,
    },
    birth_year: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return trips;
};