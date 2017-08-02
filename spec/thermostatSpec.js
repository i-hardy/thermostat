describe('Thermostat', function() {
  var thermostat = new Thermostat;

  it('has a temp', function() {
    expect(thermostat.temp).toEqual(20)
  });
});
