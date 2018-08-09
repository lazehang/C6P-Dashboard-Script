//Create the research, proposal and report folder and the sub-structor
function rprFilesCreation(shortForm, folder) {
    //Template location
    const research = DriveApp.getFileById("1YSL_q_o5sc2_cm6Pd3lS3UggdsjEiD8XtmdpqnGcWNk");
    const proposal = DriveApp.getFileById("1VkuyvFeuUi85U0hwwwO8cdFs8KlzVNHi64739En5r7A");
    const report = DriveApp.getFileById("1_PQ1pQF3RnwhUwyIxRoERSf4NH6buV8wJQcQ7s-NUtk");
  
    //Make copy to the rpr folder
    const newResearch = research.makeCopy(folder);
    const newProposal = proposal.makeCopy(folder);
    const newReport = report.makeCopy(folder);
  
    //Rename new copy
    newResearch.setName(shortForm + "-Research");
    newProposal.setName(shortForm + "-Proposal");
    newReport.setName(shortForm + "-Report Upon Completition");
  
    return {
      newResearch: newResearch,
      newProposal: newProposal,
      newReport: newReport
    };
  }