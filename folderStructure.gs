//Create client main folder with corresponding input as arguments
function newClientFolderStructure(clientFullName, firstProjectName, abbreviation, targetFolderId) {
  //Find the root of client collection folder
  var currentFolder = DriveApp.getFolderById(targetFolderId);

  //Create folder under client's name
  const clientFolder = currentFolder.createFolder(clientFullName);

  //Remove all sharing editors auth
  // removeAllEditors(clientFolder.getId());

  //Create folder with a project name
  const subFolder = clientFolder.createFolder(firstProjectName);

  //Create folders under the project
  const assets = subFolder.createFolder("Assets");
  const contracts = subFolder.createFolder("Contracts");
  const meetings = subFolder.createFolder("Meeting Minutes");
  const rpr = subFolder.createFolder("Research, Proposal and Report");

  //Create rpr files under rpr folder
  rprFilesCreation(abbreviation, rpr);

  return {
    clientFolder: clientFolder,
    subFolder: subFolder,
    assets: assets,
    contracts: contracts,
    meetings: meetings,
    rpr: rpr
  };

}

// function to run when there is a change of name