import UserAge from './../src/AgeConverter.js';

describe('userAge', function() {

  it('should test if calculation of Terran Age to Mercurial Age is accurate', function() {
    let userInfo = new UserAge(20);
    console.log(userInfo);
    expect(userInfo.mercuryAge).toEqual(4.8);
});
});
