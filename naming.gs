/** @OnlyCurrentDoc */
function editShortForm(projectAbbreviation, research, proposal, report, serviceContract, statementOfWork, initialProposal){
    research.setName(projectAbbreviation + "-Research");
    proposal.setName(projectAbbreviation + "-Proposal");
    report.setName(projectAbbreviation + "-Report Upon Completion");
  serviceContract.setName(projectAbbreviation + "-Service Contract-{{insert_freelancer_name}}");
  statementOfWork.setName(projectAbbreviation + "-Statement of Work-{{insert_freelancer_name}}");
  initialProposal.setName(projectAbbreviation + "-Initial Proposal");
}