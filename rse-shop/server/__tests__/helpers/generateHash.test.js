const generateHash = require('../../helpers/generateHash');

describe('generate hash', () => {
  it('should return value', async () => {
    const password = 'fahim123';
    const value = await generateHash(password);

    expect(value).toBeTruthy();
  });
});
