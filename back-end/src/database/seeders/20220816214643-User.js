module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'johndoe1@email.com',
        cpf: '12312312311',
        role: 'user',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
      {
        name: 'John Wick',
        email: 'johndoe2@email.com',
        cpf: '12312312312',
        role: 'user',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
      {
        name: 'John John',
        email: 'johndoe3@email.com',
        cpf: '12312312313',
        role: 'user',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
      {
        name: 'Lucas',
        email: 'admin@email.com',
        cpf: '12312312314',
        role: 'admin',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
