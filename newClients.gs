/** @OnlyCurrentDoc */

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Client Management').addItem('Create a new client with first line', 'createNewClient').addToUi();
}

function createNewClient(){
  //Get list of participants
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  //Get line within the list
  
  //Extract information from the line
  const clientName = sheet.getRange("C2").getValue();
  const firstProjectFullName = sheet.getRange("A2").getValue();
  const firstProjectAcronym = sheet.getRange("B2").getValue();
  const motherFolderId = "12TJ6jVVek5w3GTolf1Uw0GUXhg8PrLIm";
  
  //Create new client folder with the new function
  newClientFolderStructure(clientName, firstProjectFullName, firstProjectAcronym, motherFolderId);
  
  // Show a 3-second popup with the title "Status" and the message "Task started".
  SpreadsheetApp.getActiveSpreadsheet().toast('Built new client folder structure', 'Client Status', 2);
}






  
