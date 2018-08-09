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

  const clientFolder = newClientFolderStructure(clientName, motherFolderId);
  const projectFolders = createProjectFolderStructure(clientFolder, firstProjectFullName);
  const templateCopies = rprFilesCreation(projectFolders);

  editShortForm(firstProjectAcronym, templateCopies.newResearch, templateCopies.newProposal, templateCopies.newReport);

  // Show a 3-second popup with the title "Status" and the message "Task started".
  SpreadsheetApp.getActiveSpreadsheet().toast('Built new client folder structure', 'Client Status', 2);
}