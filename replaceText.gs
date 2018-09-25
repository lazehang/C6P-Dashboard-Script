//Call target google document, and replace the placeholders with targeted replacement text
function replaceAll(document, placeholders, replacementText) {
  const body = DocumentApp.openById(document.getId()).getBody();

  // Clear the text surrounding "Apps Script", with or without text.
  body.replaceText(placeholders, replacementText);
}