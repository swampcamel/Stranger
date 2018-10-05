export function findExpirationDate(yearsLeft) {
  let dueDate = new Date(new Date().setFullYear(new Date().getFullYear() + yearsLeft));
  return dueDate;
}

export function findAge(birthdate) {
  let newAge = new Date().getFullYear() - birthdate.getFullYear();
  return newAge;
  // not to be confused with the popular yuppie movement
}
