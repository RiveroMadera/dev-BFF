/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React from 'react';
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
   */

});