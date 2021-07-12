/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Render Footer Component', ()=> {
    expect(footer.length).toEqual(1);
  });

  test('Footer have 3 anchors', () => {
    expect(footer.find('a')).toHaveLength(3);
  });

  test('Footer Snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  })

  /* Si se hace un cambio en el footer, se debe
  en consola escribir: jest --updateSnapshot 
  para que pase el test
  

}); 
*/

import React from 'react';
import { create } from 'react-test-renderer';
import { render, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../../components/Footer';

configure({ adapter: new Adapter() });

describe('Footer testing', () => {
  test('Match Snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });

  // Test que sirve para comprobar que nuestro componente
  // tenga la clase Footer
  test('Footer haves class .footer', () => {
    const footer = shallow(<Footer />);
    const footerElement = footer.find('footer');
    expect(footerElement.hasClass('footer')).toBe(true);
  });

// Probando la cantidad de elementos acla
  test('Footer haves 3 anchor tags', () => {
    const footer = render(<Footer />);
    expect(footer.find('a')).toHaveLength(3);
  });
});
