/* function afterLowerCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2'));
}

function doubleUpperCase(str) {
  return str.replace(/([A-Z])([A-Z])([a-z])/g, '$1 $2'));
}
*/
function insertSpaces(str) {
  return str.replace(/([A-Z])/g, ' $1').trim();
}

module.exports = insertSpaces;
