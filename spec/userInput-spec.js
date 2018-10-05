import UserObject from './../src/UserObject.js';
import { findExpirationDate } from './../src/functions.js';

// User Object Tests

describe('UserObject', function() {

  // Tests on Age Key Value Pairs

  it('should test if calculation of Terran Age to Mercurial Age is accurate', function() {
    let userInfo = new UserObject(20);
    expect(userInfo.mercuryAge).toEqual(parseFloat(4.80).toFixed(2));
  });

  it('should test if calculation of Terran Age to Venusian Age is accurate', function() {
    let userInfo = new UserObject(20);
    expect(userInfo.venusAge).toEqual(parseFloat(12.40).toFixed(2));
  });

  it('should test if calculation of Terran Age to Martian Age is accurate', function() {
    let userInfo = new UserObject(20);
    expect(userInfo.marsAge).toEqual(parseFloat(37.60).toFixed(2));
  });

  it('should test if calculation of Terran Age to Jovian Age is accurate', function() {
    let userInfo = new UserObject(20);
    expect(userInfo.jupiterAge).toEqual(parseFloat(237.20).toFixed(2));
  });

  // Tests on Life Expectancy Key Value Pairs

  it('should test if calculation of years left on Earth is correct', function() {
    let userInfo = new UserObject(20);
    expect(userInfo.earthLife).toEqual(60);
  });

  it('should test if calculation of years left on Mercury is correct', function() {
    let userInfo = new UserObject(20);
    expect(userInfo.mercuryLife).toEqual(parseFloat(14.40).toFixed(2));
  });

  it('should test if calculation of years left on Venus is correct', function() {
    let userInfo = new UserObject(20);
    expect(userInfo.venusLife).toEqual(parseFloat(37.20).toFixed(2));
  });

  it('should test if calculation of years left on Mars is correct', function() {
    let userInfo = new UserObject(20);
    expect(userInfo.marsLife).toEqual(parseFloat(112.80).toFixed(2));
  });

  it('should test if calculation of years left on Jupiter is correct', function() {
    let userInfo = new UserObject(20);
    expect(userInfo.jupiterLife).toEqual(parseFloat(711.60).toFixed(2));
  });
});

describe('findExpirationDate', function() {

  it('should check if returned object is 30 years after the current date', function() {
    let testInput = 30;
    let returnedDate = findExpirationDate(testInput);
    expect(returnedDate.getFullYear()).toEqual(2048);
  });
});
