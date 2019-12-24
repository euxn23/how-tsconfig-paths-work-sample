const tsConfigPaths = require('tsconfig-paths');

const baseUrl = "./";
const paths = {
  '@lib/*': ['dist/path/to/nested/lib/*']
};

tsConfigPaths.register({
  baseUrl,
  paths
});
