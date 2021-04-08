const { join } = require('path');
const { readdirSync } = require('fs');
const { getOptions } = require('loader-utils');
const { Route } = require('react-router-dom');

const cwd = process.cwd();
const createRootRoute = ($code, componentDirList) => {
  const importCodeStr = componentDirList
    .map((dirname) => `import ${dirname.toUpperCase()} from './component/${dirname}/view';`)
    .join('\n');
  const rootRouteStr = componentDirList
    .map((dirname) => `<Route path={'/${dirname}'} component={${dirname.toUpperCase()}} />`)
    .join('\n');

  return importCodeStr + $code.replace('__ROOT__ROUTE__', rootRouteStr);
};
module.exports = function loader(source) {
  let $code = source;
  const options = getOptions(this);
  const componentDir = join(cwd, '/src/component');
  const componentDirList = readdirSync(componentDir);
  console.log(componentDirList);
  if ($code.indexOf('__ROOT__ROUTE__') > -1) {
    $code = createRootRoute($code, componentDirList);
  }
  return $code;
};
