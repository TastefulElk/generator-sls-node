const { handler } = require('../src/myFunction');

describe('[myFunction]', () => {
  it('should not crash', async () => {
    await handler();
  });
});
