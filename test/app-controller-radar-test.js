
require('chai/register-should');
const request = require('supertest');
const app = require('../server/middlewares/express');
const mocks = require('./mocks');

describe('App Controller Login Method', () => {

  it('Test 1:', (done) => {
    let req = mocks.test_1;
    request(app)
      .post('/radar')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.x.should.equal(0);
        res.body.y.should.equal(40);
        done();
      });
  });

  it('Test 2:', (done) => {
    let req = mocks.test_2;
    request(app)
      .post('/radar')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.x.should.equal(0);
        res.body.y.should.equal(80);
        done();
      });
  });

  it('Test 3:', (done) => {
    let req = mocks.test_3;
    request(app)
      .post('/radar')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.x.should.equal(10);
        res.body.y.should.equal(30);
        done();
      });
  });

  it('Test 4:', (done) => {
    let req = mocks.test_4;
    request(app)
      .post('/radar')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.x.should.equal(5);
        res.body.y.should.equal(35);
        done();
      });
  });

  it('Test 5:', (done) => {
    let req = mocks.test_5;
    request(app)
      .post('/radar')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.x.should.equal(5);
        res.body.y.should.equal(35);
        done();
      });
  });

  it('Test 6:', (done) => {
    let req = mocks.test_6;
    request(app)
      .post('/radar')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.x.should.equal(35);
        res.body.y.should.equal(5);
        done();
      });
  });

  it('Test 7:', (done) => {
    let req = mocks.test_7;
    request(app)
      .post('/radar')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.x.should.equal(5);
        res.body.y.should.equal(35);
        done();
      });
  });

  it('Test 8:', (done) => {
    let req = mocks.test_8;
    request(app)
      .post('/radar')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.x.should.equal(0);
        res.body.y.should.equal(10);
        done();
      });
  });

  it('Test 9:', (done) => {
    let req = mocks.test_9;
    request(app)
      .post('/radar')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.x.should.equal(3);
        res.body.y.should.equal(10);
        done();
      });
  });

  it('Test 10:', (done) => {
    let req = mocks.test_10;
    request(app)
      .post('/radar')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.x.should.equal(30);
        res.body.y.should.equal(95);
        done();
      });
  });

  it('Test 11:', (done) => {
    let req = mocks.test_11;
    request(app)
      .post('/radar')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.x.should.equal(91);
        res.body.y.should.equal(30);
        done();
      });
  });

  it('Test 12:', (done) => {
    let req = mocks.test_12;
    request(app)
      .post('/radar')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.x.should.equal(0);
        res.body.y.should.equal(11);
        done();
      });
  });

  it('Test 13:', (done) => {
    let req = mocks.test_13;
    request(app)
      .post('/radar')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.x.should.equal(11);
        res.body.y.should.equal(58);
        done();
      });
  });

});