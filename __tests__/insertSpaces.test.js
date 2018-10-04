const insertSpaces = require('../src/insertSpaces');

const expectedResult = 'Foo Bar';
const param = "FooBar";

test(`Insert Spaces into ${param}`, () => {
  const res = insertSpaces(param);
  expect(res).toBe(expectedResult);
});
