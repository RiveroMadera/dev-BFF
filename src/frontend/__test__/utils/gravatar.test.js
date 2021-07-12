/* eslint-disable no-undef */
import gravatar from '../../utils/gravatar';

test('Gravatar Function Test', () => {
  const email = 'jesusrivero19@gmail.com';
  const gravatarUrl = 'https://gravatar.com/avatar/d55c814ece902dca4708f5e6ae7a0991';
  expect(gravatarUrl).toEqual(gravatar(email));
});
