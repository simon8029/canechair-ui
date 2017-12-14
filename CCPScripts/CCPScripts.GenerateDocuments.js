const Fs = require('fs');
Path = require('path');
Chalk = require('chalk');
ReactDocgen = require('react-docgen');
Chokidar = require('chokidar');
Parse = ReactDocgen.parse;

var paths = {
  SampleFolder: Path.join(__dirname, '../src', 'CCPDocuments', 'Samples'),
  ComponentsFolder: Path.join(__dirname, '../src', 'CCPComponents'),
  OutputFolder: Path.join(__dirname, '../CCPSettings', 'CCPComponentsResources.js')
};

const enableWatchMode = process.argv.slice(2) == '--watch';
if (enableWatchMode) {
  // Regenerate component metadata when ComponentsFolder or sample change.
  Chokidar.watch([paths.SampleFolder, paths.ComponentsFolder]).on('change', function (event, path) {
    generateComponentMetaData(paths.ComponentsFolder);
  });
} else {
  // Generate component metadata
  // generateComponentMetaData(paths.ComponentsFolder);
  var allComponentFiles = [];
  allComponentFiles = getAllComponentFilesWithAbsolutePath(paths.ComponentsFolder, allComponentFiles);
  allComponentFiles = removeFilesWithGivenCharacters(allComponentFiles, ['index.js', 'spec.js']);
  allComponentFiles.map(f => {
    console.log(Chalk.green(f));
    // console.log(f.indexOf('index.js') === -1);
  })
}

function removeFilesWithGivenCharacters(fileArray, charactersArray) {
  reduced = fileArray.reduce(function (filteredFileArray, file) {
    var includeGivenKeywords = charactersArray.map(c => {
      return file.indexOf(c) !== -1;
    }).includes(true);

    if (!includeGivenKeywords) {
      filteredFileArray.push(file);
    }
    return filteredFileArray;
  }, []);

  return reduced;
};

function getAllComponentFilesWithAbsolutePath(folderWithAbsolutePath, componentFiles) {
  var files = getFilesWithAbsolutePath(folderWithAbsolutePath).map((file) => {
    componentFiles.push(file);
  });

  getSubFolderWithAbsolutePath(folderWithAbsolutePath).map(function (subFolder) {
    getAllComponentFilesWithAbsolutePath(subFolder, componentFiles
    );
  });
  return componentFiles;
};

function generateComponentMetaData(folderWithAbsolutePath) {
  var errors = [];
  let componentFiles = [];
  var componentSources = getSubFolderWithAbsolutePath(folderWithAbsolutePath).map(function (item) {
    try {
      var files = getFilesWithAbsolutePath(`${folderWithAbsolutePath}\\${item}`).map((file) => {
        componentFiles.push(`${folderWithAbsolutePath}\\${item}\\${file}`);
      });
      var subFolders = getSubFolderWithAbsolutePath(item).map((folderWithAbsolutePath) => {

      });

      // generateComponentMetaData(folderWithAbsolutePath);

    } catch (error) {
      errors.push('Error: ' + item + '=>' + error);
    }
  });
  // writeFile(paths.OutputFolder, "module.exports = " + JSON.stringify(errors.length ? errors : componentSources));
}

function populateComponentModel(paths, componentName) {
  var content = readFile(Path.join(paths.ComponentsFolder, componentName, componentName + '.js'));
  var info = parse(content);
  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content,
    SampleFolder: getSamples(paths.SampleFolder, componentName)
  }
}

function getSamples(samplePath, componentName) {
  var sample = getSampleFiles(samplePath, componentName);
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

function getSampleFiles(samplePath, componentName) {
  var exampleFiles = [];
  try {
    exampleFiles = getFilesWithAbsolutePath(path.join(samplePath, componentName));
  } catch (error) {
  }
  return exampleFiles;
}

// Given folderpath, return all subfolder's absolute path
function getSubFolderWithAbsolutePath(folderPath) {
  var folderNames = Fs.readdirSync(folderPath).filter(function (item) {
    return Fs.statSync(Path.join(folderPath, item)).isDirectory();
  });

  return folderNames.map(folderName => {
    return `${folderPath}\\${folderName}`;
  })
}

function getFilesWithAbsolutePath(folderPath) {
  var fileNames = Fs.readdirSync(folderPath).filter(function (item) {
    return Fs.statSync(Path.join(folderPath, item)).isFile();
  });

  return fileNames.map(fileName => {
    return `${folderPath}\\${fileName}`;
  });
}

function writeFile(filepath, content) {
  Fs.writeFile(filepath, content, function (err) {
  });
}

function readFile(filePath) {
  return Fs.readFileSync(filePath, 'utf-8');
}
