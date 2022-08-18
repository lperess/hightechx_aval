'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tel: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      birthday: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      active: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'Users',
      indexes: [
        {
          unique: true,
          fields: ['cpf', 'email'],
        },
      ],
    }
  );
  return User;
};
