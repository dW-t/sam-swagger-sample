const lambda = require('../../../src/handlers/sample-get.js');

describe('Test getHandler', () => {
  let scanSpy;

  // Test one-time setup and teardown, see more in https://jestjs.io/docs/en/setup-teardown
  beforeAll(() => {});

  // Clean up mocks
  afterAll(() => {
    scanSpy.mockRestore();
  });

  it('正常系', async () => {
    // Return the specified value whenever the spied scan function is called
    // scanSpy.mockReturnValue({
    // });

    const event = {
      httpMethod: 'GET',
    };

    const context = {
      test: 'sampleContext',
    };

    const result = await lambda.getHandler(event, context);

    const expectedResult = {
      statusCode: 200,
      body: JSON.stringify({
        event: event,
        context: context,
        message: 'this is get',
      }),
    };

    expect(result).toEqual(expectedResult);
  });
});
