const Fs = require('fs');
const Path = require('path');
const Chalk = require('chalk');
const colors = require('colors');
const ReactDocgen = require('react-docgen');
const Chokidar = require('chokidar');

let paths = {
  ComponentsFolder: Path.join(__dirname, '../src', 'CCPComponents'),
  OutputFolder: Path.join(__dirname, '../CCPSettings', 'CCPComponentsMetaData.json')
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

  writeFile(paths.OutputFolder, JSON.stringify(errors.length ? errors : documentMetaData));
}

function getComponentMetaData(componentFile) {
  try {
    let rawContent = ReactDocgen.parse(readFile(componentFile));

    return {
      ComponentName: getFileName(componentFile),
      ComponentFilePath: componentFile,
      ComponentMetaData: rawContent,
      ComponentSamples: getSamples(componentFile)
    }

  } catch (error) {
    return {
      ComponentName: getFileName(componentFile),
      ComponentFilePath: componentFile,
      Errors: error.toString()
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
  componentFiles = removeFilesWithGivenCharacters(componentFiles, ['index.js', 'spec.js', 'Sample']);
  return componentFiles;
};

function getFileName(path) {
  return path.split("\\").slice(-1)[0].split('.')[0];
};

function getSamples(componentFile) {
  console.log(`componentFile:`);
  console.log(componentFile);

  // let regex = /CCPComponents(.*)/g;
  // let componentRelativePath = regex.exec(Path.dirname(componentFile)); // Get component's relative path
  // console.log(`match:`);
  // console.log(match[1]);
  // let sampleRelativePath = `../CCPComponentsSamples/${componentRelativePath}`;
  let componentSamplesFolderAbsolutePath = Path.dirname(componentFile.replace(/CCPComponents/, "CCPComponentsSamples"));
  console.log(`componentSamplesFolderAbsolutePath:`);
  console.log(componentSamplesFolderAbsolutePath);
  let sampleFiles = getSampleFilesWithAbsolutePath(componentSamplesFolderAbsolutePath);
  let sampleFileRelativePath = "";
  if (sampleFiles.length > 0) {
    return sampleFiles.map(function (sampleFile) {
      let content = readFile(sampleFile)
      let info = ReactDocgen.parse(content);
      return {
        SampleName: sampleFile.split("\\").pop().slice(0, -3),
        SampleDescription: info.description,
        SampleCode: content,
        SamplePath: sampleFile
      };
    });
  } else {
    return [];
  }
}

function getSampleFilesWithAbsolutePath(componentSamplesFolderAbsolutePath) {
  // let exampleFiles = [];
  // let componentRelativePath = componentFile.split('\\').indexOf("CCPComponents")
  // let componentFileFolder = Path.dirname(componentFile);
  try {
    exampleFileNames = Fs.readdirSync(componentSamplesFolderAbsolutePath);
  } catch (error) {
    return [];
  }
  let sampleFilesWithAbsolutePath = exampleFileNames.map((exampleFile) => {
    return `${componentSamplesFolderAbsolutePath}\\${exampleFile}`;
  });

  return sampleFilesWithAbsolutePath;
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
