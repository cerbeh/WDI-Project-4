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
        username: 'martin',
        grade: '8th Dan',
        dob: '1987-10-24',
        height: 200,
        weight: 70
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

  it('should render the correct inputs', done => {
    expect(wrapper.find('[name="username"]').length).to.eq(1);
    expect(wrapper.find('[name="dob"]').length).to.eq(1);
    expect(wrapper.find('[name="weight"]').length).to.eq(1);
    expect(wrapper.find('[name="height"]').length).to.eq(1);
    expect(wrapper.find('[name="grade"]').length).to.eq(1);
    expect(wrapper.find('button').length).to.eq(1);
    done();
  });

  it('should populate the form', done => {
    expect(wrapper.find({ value: 'martin', name: 'username' }).length).to.eq(1);
    expect(wrapper.find({ value: '8th Dan', name: 'grade' }).length).to.eq(1);
    expect(wrapper.find({ value: '1987-10-24', name: 'dob' }).length).to.eq(1);
    expect(wrapper.find({ value: 200, name: 'height' }).length).to.eq(1);
    expect(wrapper.find({ value: 70, name: 'weight' }).length).to.eq(1);
    done();
  });
});
