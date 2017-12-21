const Fs = require('fs');
const Path = require('path');
const Chalk = require('chalk');
const ReactDocgen = require('react-docgen');
const Chokidar = require('chokidar');

let paths = {
  ComponentsFolder: Path.join(__dirname, '../src', 'CCPComponents'),
  OutputFolder: Path.join(__dirname, '../CCPSettings', 'CCPComponentsMetaData.js')
};

const enableWatchMode = process.argv.slice(2) == '--watch';
if (enableWatchMode) {
  // Regenerate component metadata when Components or samples change.
  Chokidar.watch([paths.ComponentsFolder]).on('change', function (event, path) {
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
    return getComponentMetaData(componentFile);
  });

  writeFile(paths.OutputFolder, "module.exports = " + JSON.stringify(errors.length ? errors : documentMetaData));
}

function getComponentMetaData(componentFile) {
  try {
    let rawContent = ReactDocgen.parse(readFile(componentFile));

    return {
      ComponentName: getFileName(componentFile),
      ComponentFilePath: componentFile,
      ComponentMetadata: {
        ComponentDescription: rawContent.description,
        ComponentProps: rawContent.props,
        ComponentCode: rawContent,
        ComponentSamples: getSamples(componentFile)
      }
    }
  } catch (error) {
    console.log(Chalk.red(error));
    return {
      componentName: getFileName(componentFile),
      componentFilePath: componentFile,
      errors: error.toString()
    }
  }
};

// function populateComponentModel(paths, componentName) {
//   let content = readFile(Path.join(paths.ComponentsFolder, componentName, componentName + '.js'));
//   let info = parse(content);
//   return {
//     name: componentName,
//     description: info.description,
//     props: info.props,
//     code: content,
//     SampleFolder: getSamples(paths.SampleFolder, componentName)
//   }
// }

function removeFilesWithGivenCharacters(fileArray, charactersArray) {
  let reduced = fileArray.reduce(function (filteredFileArray, file) {
    let includeGivenKeywords = charactersArray.map(c => {
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
  let files = getDirectChildFilesWithAbsolutePathByGivenFolderPath(folderWithAbsolutePath).map((file) => {
    componentFiles.push(file);
  });

  getDirectChildSubFoldersWithAbsolutePathByGivenFolderPath(folderWithAbsolutePath).map(function (subFolder) {
    getAllComponentFilesWithAbsolutePath(subFolder, componentFiles
    );
  });
  componentFiles = removeFilesWithGivenCharacters(componentFiles, ['index.js', 'spec.js']);
  return componentFiles;
};

function getFileName(path) {
  return path.split("\\").slice(-1)[0].split('.')[0];
};

function getSamples(componentFile) {
  let sampleFiles = getSampleFiles(componentFile);
  console.log(`sampleFiles:`);
  console.log(sampleFiles);
  if (sampleFiles.length > 0) {
    return sampleFiles.map(function (sampleFile) {
      let content = readFile(sampleFile)
      let info = parse(content);
      return {
        SampleName: sampleFile.slice(0, -3),
        SampleDescription: info.description,
        SampleCode: content
      };
    });
  } else {
    return [];
  }
}

function getSampleFiles(componentFile) {
  let exampleFiles = [];
  try {
    let componentFileFolder = Path.dirname(componentFile);
    exampleFiles = Fs.readdirSync(`${componentFileFolder}/samples`);
  } catch (error) {
    console.log(`Error happens when get samples: ${error}`);
    return exampleFiles;
  }
  return exampleFiles;
}

// Given folderpath, return all subfolder's absolute path
function getDirectChildSubFoldersWithAbsolutePathByGivenFolderPath(folderPath) {
  let folderNames = Fs.readdirSync(folderPath).filter(function (item) {
    return Fs.statSync(Path.join(folderPath, item)).isDirectory();
  });

  return folderNames.map(folderName => {
    return `${folderPath}\\${folderName}`;
  })
}

function getDirectChildFilesWithAbsolutePathByGivenFolderPath(folderPath) {
  let fileNames = Fs.readdirSync(folderPath).filter(function (item) {
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
