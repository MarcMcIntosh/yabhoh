const formatFileUrl = require('../src/formatFileUrl');

const t1 = formatFileUrl(null, 'file.md');
const e1 = 'file';

const t2 = formatFileUrl('path', 'file.md');
const e2 = 'path/file';

test('Format file name: file.md', () => {
  expect(t1).toBe(e1);
});

test('Format file path and name', () => {
  expect(t2).toBe(e2);
});
