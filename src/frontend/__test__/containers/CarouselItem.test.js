/* eslint-disable no-undef */
import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import CarouselItem from '../../components/CarouselItem';

describe('Carousel component', () => {
  test('Match Snapshot', () => {
    const carousel = create(
      <ProviderMock>
        <CarouselItem />
      </ProviderMock>,
    );
    expect(carousel.toJSON()).toMatchSnapshot();
  });

});
