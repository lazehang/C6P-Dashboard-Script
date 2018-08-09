/** @OnlyCurrentDoc */
function editShortForm(projectAbbreviation, research, proposal, report){
    research.setName(projectAbbreviation + "-Research");
    proposal.setName(projectAbbreviation + "-Proposal");
    report.setName(projectAbbreviation + "-Report Upon Completion");
}