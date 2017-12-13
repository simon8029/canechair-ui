const Fs = require('fs');
Path = require('path');
Chalk = require('chalk');
ReactDocgen = require('react-docgen');
Chokidar = require('chokidar');
Parse = ReactDocgen.parse;

var paths = {
  sample: Path.join(__dirname, '../src', 'CCPDocuments', 'Sample'),
  components: Path.join(__dirname, '../src', 'CCPComponents'),
  output: Path.join(__dirname, '../CCPSettings', 'CCPComponentsResources.js')
};

const enableWatchMode = process.argv.slice(2) == '--watch';
if (enableWatchMode) {
  // Regenerate component metadata when components or sample change.
  Chokidar.watch([paths.sample, paths.components]).on('change', function (event, path) {
    generate(paths);
  });
} else {
  // Generate component metadata
  generate(paths);
}

function generate(paths) {
  var errors = [];
  var componentSources = getDirectories(paths.components).map(function (componentName) {
    try {
      return getComponentSoucomponentSources(paths, componentName)
    } catch (error) {
      errors.push('Error: ' + componentName + '. ' + error);
    }
  });
  writeFile(paths.output, "module.exports = " + JSON.stringify(errors.length ? errors : componentSources));
}

function getComponentSoucomponentSources(paths, componentName) {
  var content = readFile(Path.join(paths.components, componentName, componentName + '.js'));
  var info = parse(content);
  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content,
    sample: getSample(paths.sample, componentName)
  }
}

function getSample(samplePath, componentName) {
  var sample = getExampleFiles(samplePath, componentName);
  return sample.map(function (file) {
    var filePath = Path.join(samplePath, componentName, file)
    var content = readFile(filePath)
    var info = parse(content);
    return {
      name: file.slice(0, -3),
      description: info.description,
      code: content
    };
  });
}

function getExampleFiles(samplePath, componentName) {
  var exampleFiles = [];
  try {
    exampleFiles = getFiles(path.join(samplePath, componentName));
  } catch (error) {
    console.log(Chalk.yellow(`${componentName} doesn't have any sample yet.`));
  }
  return exampleFiles;
}

function getDirectories(filepath) {
  return Fs.readdirSync(filepath).filter(function (file) {
    return Fs.statSync(Path.join(filepath, file)).isDirectory();
  });
}

function getFiles(filepath) {
  return Fs.readdirSync(filepath).filter(function (file) {
    return Fs.statSync(Path.join(filepath, file)).isFile();
  });
}

function writeFile(filepath, content) {
  Fs.writeFile(filepath, content, function (err) {
    err ? console.log(Chalk.red(err)) : console.log(Chalk.green("Components resources generated."));
  });
}

function readFile(filePath) {
  return Fs.readFileSync(filePath, 'utf-8');
}
