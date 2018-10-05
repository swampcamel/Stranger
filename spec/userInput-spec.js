import UserAge from './../src/AgeConverter.js';

describe('userAge', function() {

  it('should test if calculation of Terran Age to Mercurial Age is accurate', function() {
    let userInfo = new UserAge(20);
    expect(userInfo.mercuryAge).toEqual(parseFloat(4.80).toFixed(2));
  });

  it('should test if calculation of Terran Age to Venusian Age is accurate', function() {
    let userInfo = new UserAge(20);
    expect(userInfo.venusAge).toEqual(parseFloat(12.40).toFixed(2));
  });

  it('should test if calculation of Terran Age to Martian Age is accurate', function() {
    let userInfo = new UserAge(20);
    expect(userInfo.marsAge).toEqual(parseFloat(37.60).toFixed(2));
  });

  it('should test if calculation of Terran Age to Jovian Age is accurate', function() {
    let userInfo = new UserAge(20);
    expect(userInfo.jupiterAge).toEqual(parseFloat(237.20).toFixed(2));
  });
});
