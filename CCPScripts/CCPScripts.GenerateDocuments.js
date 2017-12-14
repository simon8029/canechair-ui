const Fs = require('fs');
Path = require('path');
Chalk = require('chalk');
ReactDocgen = require('react-docgen');
Chokidar = require('chokidar');

var paths = {
  SampleFolder: Path.join(__dirname, '../src', 'CCPDocuments', 'Samples'),
  ComponentsFolder: Path.join(__dirname, '../src', 'CCPComponents'),
  OutputFolder: Path.join(__dirname, '../CCPSettings', 'CCPComponentsResources.json')
};

const enableWatchMode = process.argv.slice(2) == '--watch';
if (enableWatchMode) {
  // Regenerate component metadata when Components or samples change.
  Chokidar.watch([paths.SampleFolder, paths.ComponentsFolder]).on('change', function (event, path) {
    generateDocuments(paths.ComponentsFolder);
  });
} else {
  // Generate component metadata
  generateDocuments(paths.ComponentsFolder);

}

function generateDocuments(folderWithAbsolutePath) {
  let errors = [];
  let allComponentFiles = [];
  allComponentFiles = getAllComponentFilesWithAbsolutePath(paths.ComponentsFolder, allComponentFiles);

  let documentMetaData = allComponentFiles.map(componentFile => {
    try {
      return getComponentMetaData(componentFile);
    } catch (error) {
      errors.push(`Error occured while get component meta data for ${componentFile} => ${error}`);
    }
  });

  writeFile(paths.OutputFolder, JSON.stringify(errors.length ? errors : documentMetaData));
}

function getComponentMetaData(componentFile) {
  try {
    let rawContent = readFile(componentFile);
    let componentMetaData = ReactDocgen.parse(rawContent);
    console.log(componentMetaData);
    return {
      componentName: componentFile,
      componentFilePath: componentFile,
      metadata: {
        description: componentMetaData.description,
        props: componentMetaData.props,
        code: rawContent
      }
    }
  } catch (error) {
    return {
      componentName: componentFile,
      componentFilePath: componentFile,
      error: error
    }
  }
};

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
  var files = getDirectChildFilesWithAbsolutePathByGivenFolderPath(folderWithAbsolutePath).map((file) => {
    componentFiles.push(file);
  });

  getDirectChildSubFoldersWithAbsolutePathByGivenFolderPath(folderWithAbsolutePath).map(function (subFolder) {
    getAllComponentFilesWithAbsolutePath(subFolder, componentFiles
    );
  });
  componentFiles = removeFilesWithGivenCharacters(componentFiles, ['index.js', 'spec.js']);
  return componentFiles;
};





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
    exampleFiles = getDirectChildFilesWithAbsolutePathByGivenFolderPath(path.join(samplePath, componentName));
  } catch (error) {
  }
  return exampleFiles;
}

// Given folderpath, return all subfolder's absolute path
function getDirectChildSubFoldersWithAbsolutePathByGivenFolderPath(folderPath) {
  var folderNames = Fs.readdirSync(folderPath).filter(function (item) {
    return Fs.statSync(Path.join(folderPath, item)).isDirectory();
  });

  return folderNames.map(folderName => {
    return `${folderPath}\\${folderName}`;
  })
}

function getDirectChildFilesWithAbsolutePathByGivenFolderPath(folderPath) {
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
