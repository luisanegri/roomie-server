const Sequelize = require('sequelize');
const db = require('../db');

const Room = db.define('room', {
  description: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
  rent: {
    type: Sequelize.INTEGER
  },
  deposit: {
    type: Sequelize.INTEGER
  },
  bills: {
    type: Sequelize.INTEGER
  }
  //   availability: {
  //     type: Sequelize.DATE,
  //     allowNull: false
  //   },
  // couples: {
  //   type: Sequelize.BOOLEAN
  // },
  // students: {
  //   type: Sequelize.BOOLEAN
  // },
  // professionals: {
  //   type: Sequelize.BOOLEAN
  // },
  // smoke: {
  //   type: Sequelize.BOOLEAN
  // },
  // pets: {
  //   type: Sequelize.BOOLEAN
  // }
});

module.exports = Room;
