describe('Thermostat', function() {
  var thermostat = new Thermostat;

  it('has a temp', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('has a power saving mode that defaults to true', function() {
    expect(thermostat.isPowerSavingModeOn).toBe(true);
  });

  describe('tempIncrease', function() {
    it('can have its temperature increased', function() {
      thermostat.tempIncrease();
      expect(thermostat.temp).toEqual(21);
    });

    it('does not increase temp above the max temperature', function() {
      for (var i = 0; i < 4; i++) {
        thermostat.tempIncrease();
      }
      expect(function() { thermostat.tempIncrease(); }).toThrow('Maximum temp reached')
    });

    it('cannot pass 32 degrees if PowerSavingMode is off', function() {
      var jimmy = new Thermostat;
      jimmy.changePowerSavingMode();
      for (var i = 0; i < 12; i++) {
        jimmy.tempIncrease();
      }
      expect(function() { jimmy.tempIncrease(); }).toThrow('Maximum temp reached')
    });
  });

  describe('tempDecrease', function() {
    var thermostat2 = new Thermostat;
    it('can have its temperature decreased', function() {
      thermostat2.tempDecrease();
      expect(thermostat2.temp).toEqual(19);
    });

    it('does not decrease temp below 10 degrees', function() {
      for (var i = 0; i < 9; i++) {
        thermostat2.tempDecrease();
      }
      expect(function() {thermostat2.tempDecrease()} ).toThrow('Minimum temp reached!');
    });
  });

  describe('#getMaxTemp', function() {
    it('returns what the current maximum temperature is', function() {
      expect(thermostat.getMaxTemp()).toEqual(25)
    });
  });

  describe('#changePowerSavingMode', function() {
    it('can turn PowerSavingMode off', function() {
      thermostat.changePowerSavingMode();
      expect(thermostat.isPowerSavingModeOn).toEqual(false);
    });

    it('can turn PowerSavingMode on', function() {
      thermostat.changePowerSavingMode();
      expect(thermostat.isPowerSavingModeOn).toEqual(true);
    });
  });
});
