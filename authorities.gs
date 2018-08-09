function removeAllViewers(folderId) {
  return null;
}

function removeAllEditors(folderId) {
  //insert folder id
  // "1QKYGhcGQPYBcKOCzwenQbdlFiCwkSJAp"
  const getFolder = DriveApp.getFolderById(folderId);
  
  const listOfEditor = getFolder.getEditors();
  listOfEditor.forEach(function(user){
    getFolder.removeEditor(user);
  })
  
}

