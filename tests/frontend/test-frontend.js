import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon/pkg/sinon';
var ReactTestUtils = require('react-addons-test-utils');

//React Components
import Author from '../../frontend/js/components/AuthorComponent/author';

//Mocks
const authorMock = require('../../server/mocks/author.json');

describe('Full DOM Rendering', () => {

    it('allows us to setState', () => {
        const wrapper = mount(<Author />);
        wrapper.setState({ author: authorMock });
        expect(wrapper.state().author).to.equal(authorMock);
    });

    it('calls componentWillMount', () => {
        sinon.spy(Author.prototype, 'componentWillMount');
        const wrapper = mount(<Author />);
        expect(Author.prototype.componentWillMount.calledOnce).to.be.true;
        Author.prototype.componentWillMount.restore();
    });

});

describe('Check Author Component', () => {
  var server;

  beforeEach(function() {
   server = sinon.fakeServer.create();
   server.respondWith('GET', '/api/author',
     [200, { 'Content-Type': 'application/json' },
       JSON.stringify(authorMock)]);
  });

 it('should send fake XmlHttprequest /author', (done) => {
   const wrapper = mount(<Author />);
   server.respond();
   setTimeout(function() {
     expect(JSON.stringify(wrapper.state().author)).to.equal(JSON.stringify(authorMock));
     done();
   }, 1);
  });

});
