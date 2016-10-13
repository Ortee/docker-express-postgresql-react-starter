var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../server/index');
var should = chai.should();

chai.use(chaiHttp);

//Mocks
const authorMock = require('../../server/mocks/author.json');

describe('REQUESTS TO SERVER', function() {
  it('should object with username, url, description /api/author GET', function(done) {
    chai.request(server)
      .get('/api/author')
      .set('accept', 'application/json')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('Object');
        Object.keys(authorMock).map( elem => {
          res.body.should.have.property(elem);
          res.body[elem].should.equal(authorMock[elem]);
        });
        done();
      });
  });
  it('Next server test', function(done) {
    done();
  });
});
