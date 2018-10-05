export function findExpirationDate(yearsLeft) {
  let dueDate = new Date(new Date().setFullYear(new Date().getFullYear() + yearsLeft));
  return dueDate;
}

export function findAge(birthdate) {
  let newAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
  return newAge;
  // not to be confused with the popular yuppie movement
}


export function findBirthdays(dateObject) {
  let solarBirthdays = [];
  solarBirthdays.push(new Date(dateObject.setFullYear(new Date().getFullYear() + 1)));
  solarBirthdays.push(new Date(dateObject.setDate(dateObject.getDate() + 88)));
  solarBirthdays.push(new Date(dateObject.setDate(dateObject.getDate() + 225)));
  solarBirthdays.push(new Date(dateObject.setDate(dateObject.getDate() + 687)));
  solarBirthdays.push(new Date(dateObject.setDate(dateObject.getDate() + 4331)));
  return solarBirthdays;
}
