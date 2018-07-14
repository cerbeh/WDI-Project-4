/* global describe, it, beforeEach */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
//shallow is for functional components


import UsersForm from '../../../src/components/users/Form';


describe('UsersForm tests', () => {
  let wrapper;


  beforeEach(done => {
    const props ={
      data: {
        username: 'test',
        dob: '1993-08-17',
        gender: 'Non-binary',
        height: '12',
        weight: '12',
        grade: '2nd Dan',
        errors: {}
      }
    };
    wrapper = shallow(<UsersForm {...props}/>);
    done();
  });

  it('should render a form', done => {
    expect(wrapper.find('form').length).to.eq(1);
    done();
  });
});
