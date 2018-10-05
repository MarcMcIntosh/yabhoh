function formatFileUrl(pathToFile, fileName) {
  const name = fileName.replace(/.md$/, '');
  return (pathToFile) ? `${pathToFile}/${name}` : name;
}

module.exports = formatFileUrl
