//Create the research, proposal and report folder and the sub-structor
function rprFilesCreation(targetFolder) {
    //Template location
    const research = DriveApp.getFileById("1YSL_q_o5sc2_cm6Pd3lS3UggdsjEiD8XtmdpqnGcWNk");
    const proposal = DriveApp.getFileById("1VkuyvFeuUi85U0hwwwO8cdFs8KlzVNHi64739En5r7A");
    const report = DriveApp.getFileById("1_PQ1pQF3RnwhUwyIxRoERSf4NH6buV8wJQcQ7s-NUtk");
  
    //Make copy to the rpr folder
    const newResearch = research.makeCopy(targetFolder);
    const newProposal = proposal.makeCopy(targetFolder);
    const newReport = report.makeCopy(targetFolder);
  
    return {
      newResearch: newResearch,
      newProposal: newProposal,
      newReport: newReport
    };
  }