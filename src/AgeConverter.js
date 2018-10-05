export default class UserAge {
  constructor(age) {
    this.earthAge = age;
    this.mercuryAge = parseFloat(age * 0.24).toFixed(2);
    this.venusAge = parseFloat(age * 0.62).toFixed(2);
    this.marsAge = parseFloat(age * 1.88).toFixed(2);
    this.jupiterAge = parseFloat(age * 11.86).toFixed(2);
  }
}
