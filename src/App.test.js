import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import ToggleComponent from './ToggleComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('ToggleComponent', () => {
  it('Should be true', () => {
     const test = true;
     expect(test).toBe(true);
  });
});

// it('Should be false', () => {
//   const test = 'Shubham';
//   expect(test).toBe('Ankit');
// });

// Enzyme.configure({ adapter: new Adapter() });
// describe('ToggleComponent', () => {
//   it('should show the text', () => {
//   const toggleInstance = shallow(<ToggleComponent />);
//   const element = toggleInstance.find('div div');
//   expect(element.text()).toBe('This will be toggled');
//  });
// });