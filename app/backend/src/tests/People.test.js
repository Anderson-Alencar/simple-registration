const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const {
  describe, before, it, after,
} = require('mocha');

const { expect } = chai;

const server = require('../app');

const { People } = require('../database/models');
const { People: peopleMock } = require('./mock/models');

chai.use(chaiHttp);

describe('Rota GET /peoples', () => {
  before(() => {
    sinon.stub(People, 'findAll')
      .callsFake(peopleMock.findAll);
  });

  after(() => {
    People.findAll.restore();
  });

  describe('Consulta lista de pessoas', () => {
    let response;

    before(async () => {
      response = await chai
        .request(server)
        .get('/peoples');
    });

    it('A requisição GET para a rota traz uma lista inicial contendo dois registros de pessoas', () => {
      expect(response.body).to.have.length(2);
    });

    it('Essa requisição deve retornar código de status 200', () => {
      expect(response).to.have.status(200);
    });
  });
});

describe('Rota POST /peoples', () => {
  before(() => {
    sinon.stub(People, 'create')
      .callsFake(peopleMock.create);
    sinon.stub(People, 'findAll')
      .callsFake(peopleMock.findAll);
  });

  after(() => {
    People.create.restore();
    People.findAll.restore();
  });

  describe('Adiciona uma nova pessoa', () => {
    let initialList = [];
    let finalList = [];

    const newPeople = {
      fullName: 'Zezinho',
      birthDate: '2008-07-14',
    };

    before(async () => {
      initialList = await chai
        .request(server)
        .get('/peoples')
        .then(({ body }) => body);
      await chai
        .request(server)
        .post('/peoples')
        .send(newPeople);
      finalList = await chai
        .request(server)
        .get('/peoples')
        .then(({ body }) => body);
    });

    it('A lista inicialmente deve retornar 2 registros', () => {
      expect(initialList).to.have.length(2);
    });

    it('A lista final deve retornar, por tanto, 3 registros', () => {
      expect(finalList).to.have.length(3);
    });

    it('O objeto possui as propriedades de uma "people"', () => {
      expect(finalList[2]).to.have.property('id');
      expect(finalList[2]).to.have.property('fullName');
      expect(finalList[2]).to.have.property('birthDate');
    });

    it('O objeto possui as valores esperados', () => {
      expect(finalList[2].fullName).to.be.equal(newPeople.fullName);
      expect(finalList[2].birthDate).to.be.equal(newPeople.birthDate);
    });

    it('O registro criado deve corresponder ao enviado na requisição POST', () => {
      expect(finalList[2]).to.contain(newPeople);
    });
  });
});
