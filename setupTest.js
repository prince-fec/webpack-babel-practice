import Enzyme from 'enzyme'
import React from 'react';
// import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });