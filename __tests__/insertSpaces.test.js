const insertSpaces = require('../src/insertSpaces');

const expectedResult = 'Foo Bar';
const param = "FooBar";

test(`Insert Spaces into ${param}`, () => {
  const res = insertSpaces(param);
  expect(res).toBe(expectedResult);
});

const p1 = 'TEST';
const e1 = 'TEST';

test(`Dont insert between a series of capatals`, () => {
  const res = insertSpaces(p1);
  expect(res).toBe(e1);
})
