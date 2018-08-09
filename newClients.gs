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
  //Get line within the list

  //Extract information from the line
  // Harcoding
  const clientName = sheet.getRange("C2").getValue();
  const firstProjectFullName = sheet.getRange("A2").getValue();
  const firstProjectAcronym = sheet.getRange("B2").getValue();
  const motherFolderId = "12TJ6jVVek5w3GTolf1Uw0GUXhg8PrLIm";

  //Create new client folder with the new function
  // [assets, contracts, meetings, rpr]
  // const newFolderStacks = newClientFolderStructure(clientName, firstProjectFullName, firstProjectAcronym, motherFolderId);



  // Show a 3-second popup with the title "Status" and the message "Task started".
  SpreadsheetApp.getActiveSpreadsheet().toast('Built new client folder structure', 'Client Status', 2);
}