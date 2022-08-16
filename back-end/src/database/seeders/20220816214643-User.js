module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'johndoe1@email.com',
        cpf: '12312312311',
      },
      {
        name: 'John Wick',
        email: 'johndoe2@email.com',
        cpf: '12312312312',
      },
      {
        name: 'John John',
        email: 'johndoe3@email.com',
        cpf: '12312312313',
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
