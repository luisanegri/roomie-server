const Sequelize = require('sequelize');
const db = require('../db');

const Room = db.define('room', {
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true
  },
  rent: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  deposit: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  bills: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  //   availability: {
  //     type: Sequelize.DATE,
  //     allowNull: false
  //   },
  couples: {
    type: Sequelize.BOOLEAN
  },
  students: {
    type: Sequelize.BOOLEAN
  },
  professionals: {
    type: Sequelize.BOOLEAN
  },
  smoke: {
    type: Sequelize.BOOLEAN
  },
  pets: {
    type: Sequelize.BOOLEAN
  }
});

module.exports = Room;
