/** @OnlyCurrentDoc */

// Create a drop down menu on top of the Google Sheet
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Client Management').addItem('Create a new client with first line', 'createNewClient').addToUi();
}

// To retrive information of a new client and create the folder structure with a cb function
function createNewClient() {
  //Get current spreadsheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  //Extract information from the line
  // Harcoding
  const motherFolderId = "12TJ6jVVek5w3GTolf1Uw0GUXhg8PrLIm";
  const clientName = sheet.getRange("C2").getValue();
  const firstProjectFullName = sheet.getRange("A2").getValue();
  const firstProjectAcronym = sheet.getRange("B2").getValue();

  // Create client main folder with corresponding input as arguments
  const clientFolder = newClientFolderStructure(clientName, motherFolderId);

  // Create project folders with project name
  const projectFolders = createProjectFolderStructure(clientFolder.clientFolder, firstProjectAcronym, firstProjectFullName);

  // Copy template documents into "Research, Proposal and Report Upon Delivery"
  const templateCopies = rprFilesCreation(projectFolders.rpr);

  // Amend name of the copied template documents
  editShortForm(firstProjectAcronym, templateCopies.newResearch, templateCopies.newProposal, templateCopies.newReport);

  // Change the value of the project name into a hyperline which links to the actual project folder
  const clientFolderUrl = clientFolder.clientFolder.getUrl();
  sheet.getRange("C2").setValue("=hyperlink(" + clientFolderUrl + ", 'string')");

  // Change clients name into a hyperline which links to the client's folder
  const projectFolderUrl = projectFolders.projectFolder.getUrl();
  sheet.getRange("A2").setValue("=hyperlink(" + projectFolderUrl + ", 'string')");

  // Show a 3-second popup with the title "Status" and the message "Task started".
  SpreadsheetApp.getActiveSpreadsheet().toast('Built new client folder structure', 'Client Status', 2);
}