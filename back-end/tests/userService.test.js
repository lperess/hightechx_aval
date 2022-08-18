const { expect } = require('chai');
const { describe, it } = require('mocha');
const UserService = require('../src/services/UserService');

const userModel = {
  findAll: () => [
    {
      dataValues: {
        id: 1,
        name: 'John Doe',
        email: 'johndoe1@email.com',
        cpf: '12312312311',
        tel: null,
        birthday: null,
        active: true,
        role: 'user',
        password: 'e10adc3949ba59abbe56e057f20f883e',
        createdAt: '2022-08-18T13:51:02.000Z',
        updatedAt: '2022-08-18T13:51:02.000Z',
      },
    },
    {
      dataValues: {
        id: 2,
        name: 'John Doe',
        email: 'johndoe1@email.com',
        cpf: '12312312311',
        tel: null,
        birthday: null,
        active: true,
        role: 'user',
        password: 'e10adc3949ba59abbe56e057f20f883e',
        createdAt: '2022-08-18T13:51:02.000Z',
        updatedAt: '2022-08-18T13:51:02.000Z',
      },
    },
    {
      dataValues: {
        id: 3,
        name: 'John Doe',
        email: 'johndoe1@email.com',
        cpf: '12312312311',
        tel: null,
        birthday: null,
        active: true,
        role: 'user',
        password: 'e10adc3949ba59abbe56e057f20f883e',
        createdAt: '2022-08-18T13:51:02.000Z',
        updatedAt: '2022-08-18T13:51:02.000Z',
      },
    },
  ],
};

describe('Teste UserService.findAll', () => {
  it('Retorna os usuários cadastrados no banco', async () => {
    const userService = new UserService(userModel);

    const serviceResponse = await userService.findAll();

    expect(serviceResponse).to.be.an('array');
    expect(serviceResponse[0]).to.be.an('object');
    expect(serviceResponse[0]).to.have.property('dataValues');
    expect(serviceResponse[0].dataValues).to.be.an('object');
    expect(serviceResponse[0].dataValues).to.have.property('id');
    expect(serviceResponse[0].dataValues.id).equals(1);
  });
});
