function iterateFolders() {
  const folders = DriveApp.getFolderById("1PDG1VuUbJIIGyJnoy2IRUd-dnUT5am0n");
  while (folders.hasNext()){
    
  }
}

// Make a copy of all files from readFolder to writeFolder
function fileIterator(readFolder, writeFolder){
//  If there are any files inside the folder, copy them all
  var folderFiles = readFolder.getFiles();
  
//  Iterate through all folder and make copy of them
  while (folderFiles.hasNext()){
    var file = folderFiles.next();
    var copy = file.makeCopy(writeFolder);
  }
  
}


// Make a copy of all folder from readFolder to writeFolder
function folderIterator(readFolder, writeFolder){
  var folders = readFolder.getFolders();
  
  while(folders.hasNext()){
    var folderName = folders.next().getName();
    var copy = writeFolder.createFolder(folderName);
  }
}




function testFile(){
  
  //  Get both target and the object folder
  const folder = DriveApp.getFolderById("1htV2Emhx2-YfKbH-OarFapIT5Q6_8x5i");
  const copyTargetFolder = DriveApp.getFolderById("1xl07Tbahzaou77dPpivwuzlQyAgk_aqJ");
  
  
  fileIterator(folder,copyTargetFolder)
}

function testFolder(){

  const folder = DriveApp.getFolderById("1PDG1VuUbJIIGyJnoy2IRUd-dnUT5am0n");
  const copyTargetFolder = DriveApp.getFolderById("1xl07Tbahzaou77dPpivwuzlQyAgk_aqJ");
  
  folderIterator(folder, copyTargetFolder);
}
