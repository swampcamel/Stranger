export default class UserObject {
  constructor(age, avgLifetime = 80) {
    this.earthAge = age;
    this.mercuryAge = parseFloat(age * 0.24).toFixed(2);
    this.venusAge = parseFloat(age * 0.62).toFixed(2);
    this.marsAge = parseFloat(age * 1.88).toFixed(2);
    this.jupiterAge = parseFloat(age * 11.86).toFixed(2);

    const yearsRemaining = avgLifetime - age;

    this.earthLife = yearsRemaining;
    this.mercuryLife = parseFloat(yearsRemaining * 0.24).toFixed(2);
    this.venusLife = parseFloat(yearsRemaining * 0.62).toFixed(2);
    this.marsLife = parseFloat(yearsRemaining * 1.88).toFixed(2);
    this.jupiterLife = parseFloat(yearsRemaining * 11.86).toFixed(2);
  }
}
