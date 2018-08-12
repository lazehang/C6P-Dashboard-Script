/** @OnlyCurrentDoc */

// Create a drop down menu on top of the Google Sheet
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Project Management').addSubMenu(ui.createMenu("New Project").addItem('Create new client with folder structure', 'createNewClient').addItem("Create new project", 'createNewProject')).addToUi();
}

// To retrive information of a new client and create the folder structure with a cb function
function createNewClient() {
  //Get current spreadsheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const ui = SpreadsheetApp.getUi();
  
  //Extract information from the line
  // Harcoding
  const motherFolderId = "12TJ6jVVek5w3GTolf1Uw0GUXhg8PrLIm";

  // Prompt the enter of client full name, project full name and the acronym
  const clientName = ui.prompt("Please enter client's full name");
  const firstProjectFullName = ui.prompt("Please enter the name of the project");
  const firstProjectAcronym = ui.prompt("Please enter the acronym of the project");

  // Create client main folder with corresponding input as arguments
  const clientFolder = newClientFolderStructure(clientName.getResponseText(), motherFolderId);

  // Create project folders with project name
  const projectFolders = createProjectFolderStructure(clientFolder.clientFolder, firstProjectAcronym.getResponseText(), firstProjectFullName.getResponseText());

  // Copy template documents into "Research, Proposal and Report Upon Delivery"
  const templateCopies = rprFilesCreation(projectFolders.rpr);

  // Amend name of the copied template documents
  editShortForm(firstProjectAcronym.getResponseText(), templateCopies.newResearch, templateCopies.newProposal, templateCopies.newReport);

  // Insert empty row in second row
  sheet.insertRowAfter(1);

  // Change the value of the project name into a hyperline which links to the actual project folder
  const clientFolderUrl = clientFolder.clientFolder.getUrl();
  sheet.getRange("C2").setFormula('=hyperlink("' + clientFolderUrl + '", "' + clientName.getResponseText() + '")');

  // Change clients name into a hyperline which links to the client's folder
  const projectFolderUrl = projectFolders.projectFolder.getUrl();
  sheet.getRange("A2").setFormula('=hyperlink("' + projectFolderUrl + '", "' + firstProjectFullName.getResponseText() + '")');

  //  Change the cell value
  sheet.getRange("B2").setValue(firstProjectAcronym.getResponseText());

  // Show a 3-second popup with the title "Status" and the message "Task started".
  SpreadsheetApp.getActiveSpreadsheet().toast('Built new client folder structure', 'Client Status', 2);
}

// Use highlighted link to create folder structure for client
function createNewProject(){
  //Get current spreadsheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const clientName = SpreadsheetApp.getActiveSheet().getActiveCell().getDisplayValue();
  const ui = SpreadsheetApp.getUi();
  
  // Prompt the enter of client full name, project full name and the acronym
  const firstProjectFullName = ui.prompt("Please enter the name of the project" );
  const firstProjectAcronym = ui.prompt("Please enter the acronym of the project" );
  
  // Extract client main folder from active cell
  const clientFolder = DriveApp.getFoldersByName(clientName).next();

  // Create project folders with project name
  const projectFolders = createProjectFolderStructure(clientFolder, firstProjectAcronym.getResponseText(), firstProjectFullName.getResponseText());

  // Copy template documents into "Research, Proposal and Report Upon Delivery"
  const templateCopies = rprFilesCreation(projectFolders.rpr);

  // Amend name of the copied template documents
  editShortForm(firstProjectAcronym.getResponseText(), templateCopies.newResearch, templateCopies.newProposal, templateCopies.newReport);
  
  // Insert empty row in second row
  sheet.insertRowAfter(1);
  
  // Change the value of the project name into a hyperline which links to the actual project folder
  const clientFolderUrl = clientFolder.getUrl();
  sheet.getRange("C2").setFormula('=hyperlink("' + clientFolderUrl + '", "' + clientName.getResponseText() + '")');

  // Change clients name into a hyperline which links to the client's folder
  const projectFolderUrl = projectFolders.projectFolder.getUrl();
  sheet.getRange("A2").setFormula('=hyperlink("' + projectFolderUrl + '", "' + firstProjectFullName.getResponseText() + '")');
  
  //  Change the cell value
  sheet.getRange("B2").setValue(firstProjectAcronym.getResponseText());

  // Show a 3-second popup with the title "Status" and the message "Task started".
  SpreadsheetApp.getActiveSpreadsheet().toast('Built new project folder structure', 'Client Status', 2);
  
}