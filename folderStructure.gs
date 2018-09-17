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
function createProjectFolderStructure(targetFolder, abbreviation, projectName) {
  //Create folder with a project name
  const projectFolder = targetFolder.createFolder(abbreviation + "-" + projectName);

  //Create folders under the project
  
  //## Images, icons, design elements
  const assets = projectFolder.createFolder("Assets");
  
  //## Images, icons, design elements
  const clientIpt = projectFolder.createFolder("Client Input");
  
  //## contracts, meetings, research, proposal and reports
  const business = projectFolder.createFolder("Business");
  
  //## Any end products for clients
  const production = projectFolder.createFolder("Production");

  //Create sub folder structure under business
  const contracts = business.createFolder("Contracts");
  const meetings = business.createFolder("Meeting Minutes");
  const rpr = business.createFolder("Research, Proposal and Report");
  
  // Returning folders as folders
  return {
    projectFolder: projectFolder,    
    assets: assets,
    clientInput : clientIpt,
    business: business,
    production: production,
    contracts: contracts,
    meetings: meetings,
    rpr: rpr
  }
}