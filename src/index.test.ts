import HttpClient from './index';

describe('Test HttpClient', () => {
  const client = new HttpClient({});

  test('it inits', () => {
    expect(client instanceof HttpClient).toBe(true);
  });

  test('it GETs a resource', () => {
    let result: any;

    result = client.get(`https://secure.nhrec.us/cte/api`);

    console.log(result);
  });
});
