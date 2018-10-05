export function findExpirationDate(yearsLeft) {
  let dueDate = new Date(new Date().setFullYear(new Date().getFullYear() + yearsLeft));
  return dueDate;
}

export function findAge(birthdate) {
  let newAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
  return newAge;
  // not to be confused with the popular yuppie movement
}


  // Must be refactored to account for time zone differences illiciting a day before the user's input as well as accounting for issues with requirements for algorithms when moving between months. Either integrate a package that adds functionality to date object for adding number of days or write functions that convert the orbital periods to milliseconds use those figures to add to date.


// export function findBirthdays(dateObject) {
//   let solarBirthdays = [];
//   solarBirthdays.push(new Date(dateObject.setFullYear(new Date().getFullYear() + 1)));
//   solarBirthdays.push(new Date(dateObject.setFullYear(new Date().getFullYear() + 1)));
//   console.log(solarBirthdays);
// }
