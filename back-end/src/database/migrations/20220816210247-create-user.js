module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      tel: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      birthday: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      active: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'user',
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  },
};
