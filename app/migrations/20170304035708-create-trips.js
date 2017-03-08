'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('TRIPs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trip_id: {
        type: Sequelize.INTEGER
      },
      start_time: {
        type: Sequelize.DATE
      },
      stop_time: {
        type: Sequelize.DATE
      },
      bike_id: {
        type: Sequelize.INTEGER
      },
      trip_duration: {
        type: Sequelize.INTEGER
      },
      from_station_id: {
        type: Sequelize.INTEGER
      },
      from_station_name: {
        type: Sequelize.VARCHAR
      },
      to_station_id: {
        type: Sequelize.INTEGER
      },
      to_station_name: {
        type: Sequelize.VARCHAR
      },
      user_type: {
        type: Sequelize.VARCHAR
      },
      gender: {
        type: Sequelize.VARCHAR
      },
      birth_year: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('TRIPs');
  }
};