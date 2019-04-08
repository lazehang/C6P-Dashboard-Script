/*
* Copy all folders' structure and all files in a folder
* -----------------------------------------------------
* @param {string} folderName - Folder Name
* @param {Folder | undefined} latestFolderObj - Latest Created Folder Object
*/
function _copyFolder(folderName, latestFolderObj) {
  // get folder by name
  const parentFolders = DriveApp.getFoldersByName(folderName) 
  
  // return if no more folder can be found 
  if (!parentFolders.hasNext()) {
    return
  }
  
  const parentFolder = parentFolders.next();
  // either take the root (for the very first time) 
  // or take the latest created folder as base
  const base = (latestFolderObj) ? latestFolderObj: DriveApp
  
  // use the base to create new folder under it
  const latestFolder = base.createFolder("Copy of " + parentFolder.getName());
  
  // retrieve all files under parent folder and make a copy
  const childrenFiles = parentFolder.getFiles();
  while (childrenFiles.hasNext()){
    var childFile = childrenFiles.next();
    Logger.log(childFile)
    childFile.makeCopy("Copy of " + childFile.getName(), latestFolder);
  }
  
  // retrieve all folders under parent folder recursively
  const childrenFolders = parentFolder.getFolders()
  while(childrenFolders.hasNext()){
    var childFolder = childrenFolders.next()
    Logger.log(childFolder)
    // recursive: loop the next folder 
    _copyFolder(childFolder.getName(), latestFolder)
  }
}

/* Entry Point */
function main() {
  _copyFolder('eBook')
}