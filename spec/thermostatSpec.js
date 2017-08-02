describe('Thermostat', function() {
  var thermostat = new Thermostat;

  it('has a temp', function() {
    expect(thermostat.temp).toEqual(20);
  });

  describe('tempIncrease', function() {
    it('can have its temperature increased', function() {
      thermostat.tempIncrease();
      expect(thermostat.temp).toEqual(21);
    });
  });

  describe('tempDecrease', function() {
    it('can have its temperature decreased', function() {
      var thermostat2 = new Thermostat;
      thermostat2.tempDecrease();
      expect(thermostat2.temp).toEqual(19);
    });
  });
});
