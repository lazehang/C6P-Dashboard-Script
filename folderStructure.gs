//Create client main folder with corresponding input as arguments
function newClientFolderStructure(clientFullName, targetFolderId) {
  //Find "Clients and Projects" folder in Drive
  var currentFolder = DriveApp.getFolderById(targetFolderId);

  //Create folder under client's name
  const clientFolder = currentFolder.createFolder(clientFullName);

  return {
    clientFolder: clientFolder
  };
}

// Create project folder structures
function createProjectFolderStructure(targetFolder, projectName) {
  //Create folder with a project name
  const projectFolder = targetFolder.createFolder(abbreviation + "-" + projectName);

  //Create folders under the project
  const assets = projectFolder.createFolder("Assets");
  const contracts = projectFolder.createFolder("Contracts");
  const meetings = projectFolder.createFolder("Meeting Minutes");
  const rpr = projectFolder.createFolder("Research, Proposal and Report");

  // Returning folders as folders
  return {
    assets: assets,
    contracts: contracts,
    meetings: meetings,
    rpr: rpr
  }
}