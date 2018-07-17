/* global describe, it, beforeEach, before,after */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import sinon from 'sinon';
import axios from 'axios';
import Promise from 'bluebird';
// import _ from 'lodash';

import SessionsIndex from '../../../src/components/sessions/Index';

const data =[{
  _id: 1,
  title: 'Practice for finals',
  discipline: 'Keiko',
  date: new Date('Mar 20, 2018'),
  duration: 60,
  notes: 'Smashed it.'
},{
  _id: 2,
  title: 'Practice for semis',
  discipline: 'Asa-geiko',
  date: new Date('Mar 16, 2018'),
  duration: 45,
  notes: 'Sesh'
},{
  _id: 3,
  title: 'I hate mornings',
  discipline: 'Asa-geiko',
  date: new Date('Mar 1, 2018'),
  duration: 30,
  notes: 'Morning practice sucks'
},{
  _id: 4,
  title: 'Practice for semis',
  discipline: 'Keiko',
  date: new Date('Mar 18, 2018'),
  duration: 50,
  notes: 'Sesh'
}];


describe('SessionsIndex tests', () => {
  let wrapper;
  let promise;

  before(done => {
    promise = Promise.resolve({ data });
    sinon.stub(axios, 'get').returns(promise);
    done();
  });
  after(done => {
    axios.get.restore();
    done();
  });
  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter>
        <SessionsIndex />
      </MemoryRouter>
    );
    done();
  });

  it('should render sessions', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('div.container').length).to.eq(4);
      done();
    })
      .catch(done);
  });
});
