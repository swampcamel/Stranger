export function findExpirationDate(yearsLeft) {
  let dueDate = new Date(new Date().setFullYear(new Date().getFullYear() + yearsLeft));
  return dueDate;
}
