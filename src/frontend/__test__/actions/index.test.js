/* eslint-disable no-undef */
/*
import { setFavorite, loginRequest } from '../../actions';
import movieMock from '../../__mocks__/movieMock';

describe('Actions', ()=> {
  test('Set Favorite', () => {
    const payload = movieMock;
    const expectedAction = {
      type: 'SET_FAVORITE',
      payload
    }
    expect(setFavorite(payload)).toEqual(expectedAction);
  });

  test('Login', () => {
    const payload = {
      email: 'test@test.com',
      password: 'password'
    }
    const expectedAction = {
      type: 'LOGIN_REQUEST',
      payload
    }
    expect(loginRequest(payload)).toEqual(expectedAction);
  });
})
*/
import { setFavorite, loginRequest, logoutRequest } from '../../actions';
import movieMock from '../../__mocks__/movieMock';

describe('Actions', () => {
  it('It should create an action to set favorite', () => {
    const payload = movieMock;
    const expected = {
      type: 'SET_FAVORITE',
      payload,
    };
    expect(setFavorite(payload)).toEqual(expected);
  });

  it('It should create an action to set loginRequest', () => {
    const payload = {
      email: 'test@test.com',
      password: 'secure-password',
    };
    const expected = {
      type: 'LOGIN_REQUEST',
      payload,
    };
    expect(loginRequest(payload)).toEqual(expected);
  });
  
  it('It should create an action to set logoutRequest', () => {
    const payload = {};
    const expected = {
      type: 'LOGOUT_REQUEST',
      payload,
    };
    expect(logoutRequest(payload)).toEqual(expected);
  });
});
