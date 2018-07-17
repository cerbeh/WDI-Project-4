/* global describe, it, beforeEach */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import UsersForm from '../../../src/components/users/Form';

describe('UsersForm tests', () => {

  let wrapper;
  //
  beforeEach(done => {
    // shallow is for functional components (it does not trigger lifecycle hooks)
    const props = {
      user: {
        username: 'test',
        dob: '1970-01-01',
        email: 'test@test.com',
        password: 'test',
        passwordConfirmation: 'test'
      },
      errors: {}
    };
    wrapper = shallow(<UsersForm  {...props}/>);
    done();
  });

  it('should render a form', done => {
    expect(wrapper.find('form').length).to.eq(1);
    done();
  });
});
