describe('userAge', function() {

  it('should test whether a userInput is a valid age', function() {
    let userAge = 20;
    expect(typeof userAge).toEqual(jasmine.any(Number));
  });

  it('should test whether a userInput is not a valid age', function() {
    let userAge = 'alphabet';
    expect(typeof userAge).toEqual(jasmine.any(Number));
  });
});
