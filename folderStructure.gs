function rprFilesCreation(shortForm, folder){
    //Template location
  const research = DriveApp.getFileById("1YSL_q_o5sc2_cm6Pd3lS3UggdsjEiD8XtmdpqnGcWNk");
  const proposal = DriveApp.getFileById("1VkuyvFeuUi85U0hwwwO8cdFs8KlzVNHi64739En5r7A");
  const report  = DriveApp.getFileById("1_PQ1pQF3RnwhUwyIxRoERSf4NH6buV8wJQcQ7s-NUtk");
  
  //Make copy to the rpr folder
  const newResearch = research.makeCopy(folder);
  const newProposal = proposal.makeCopy(folder);
  const newReport = report.makeCopy(folder);
  
  //Rename new copy
  newResearch.setName(shortForm+"-Research");
  newProposal.setName(shortForm+"-Proposal");
  newReport.setName(shortForm+"-Report Upon Completition");
}

function newClientFolderStructure(clientFullName, firstProjectName, abbreviation, targetFolderId) {
  //Find the root of client collection folder
  var currentFolder = DriveApp.getFolderById(targetFolderId);
  
  //Create folder under client's name
  const clientFolder = currentFolder.createFolder(clientFullName);
  
   //Remove all sharing editors auth
  removeAllEditors(clientFolder.getId());
  
  //Create folder with a project name
  const subFolder = clientFolder.createFolder(firstProjectName);
  
  //Create folders under the project
  const assets = subFolder.createFolder("Assets");
  const contracts = subFolder.createFolder("Contracts");
  const meetings = subFolder.createFolder("Meeting Minutes");
  const rpr = subFolder.createFolder("Research, Proposal and Report");
  
  //Create rpr files under rpr folder
  rprFilesCreation(abbreviation, rpr);
  
}