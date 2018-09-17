//Create the research, proposal and report folder and the sub-structor
function rprFilesCreation(targetFolder) {
    //Template location
    const research = DriveApp.getFileById("1YSL_q_o5sc2_cm6Pd3lS3UggdsjEiD8XtmdpqnGcWNk");
    const developmentAgreement = DriveApp.getFileById("1VkuyvFeuUi85U0hwwwO8cdFs8KlzVNHi64739En5r7A");
    const report = DriveApp.getFileById("1_PQ1pQF3RnwhUwyIxRoERSf4NH6buV8wJQcQ7s-NUtk");
  const statementOfWork = DriveApp.getFileById("1kQWF2dDmP5P1rk85V4g3Gf4nJMJ2lycE6UyHre2XEk4");
  const serviceContract = DriveApp.getFileById("17djOuATBxQ1tVb6PBR0KDOYtlzRDwjZG12BqoUsQDJw");
  const initialProposal = DriveApp.getFileById("1dV0E9DxtnuuqCpsli6MIjq0868dWP8i6B28J7VYC0Yg");
  
  
    //Make copy to the rpr folder
    const newResearch = research.makeCopy(targetFolder);
    const newProposal = developmentAgreement.makeCopy(targetFolder);
    const newReport = report.makeCopy(targetFolder);
  const newStatementOfWork = statementOfWork.makeCopy(targetFolder);
  const newServiceContract = serviceContract.makeCopy(targetFolder);
  const newInitialProposal = initialProposal.makeCopy(targetFolder);
  
    return {
      newResearch: newResearch,
      newProposal: newProposal,
      newReport: newReport, 
      newStatementOfWork: newStatementOfWork, 
      newServiceContract: newServiceContract, 
      newInitialProposal: newInitialProposal
    };
  }