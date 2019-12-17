const username_regex = /^[a-zA-Z0-9]{4,}$/;
const email_regex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
const password_regex = /(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}/;

function validate(field, regex) {
  if (regex.test(field)) {
    return true;
  }
  return false;
}