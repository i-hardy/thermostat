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
      thermostat.reset();
      for (var i = 0; i < 5; i++) {
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
    it('can have its temperature decreased', function() {
      thermostat.reset();
      thermostat.tempDecrease();
      expect(thermostat.temp).toEqual(19);
    });

    it('does not decrease temp below 10 degrees', function() {
      thermostat.reset();
      for (var i = 0; i < 10; i++) {
        thermostat.tempDecrease();
      }
      expect(function() {thermostat.tempDecrease()} ).toThrow('Minimum temp reached!');
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

  describe('#reset', function() {
    it('resets the temperature to 20', function() {
      thermostat.tempIncrease();
      thermostat.reset();
      expect(thermostat.temp).toEqual(20)
    });
  });

  describe('#currentEnergyUsage', function() {
    it('it is low-usage when temp is < 18', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.tempDecrease();
      }
      expect(thermostat.currentEnergyUsage()).toEqual('low');
    });

    it('it is medium-usage when temp is between 18-25', function() {
      thermostat.reset();
      expect(thermostat.currentEnergyUsage()).toEqual('medium');
    });

    it('it is high-usage when temp is greater 25', function() {
      thermostat.changePowerSavingMode();
      thermostat.reset();
      for (var i = 0; i < 6; i++) {
        thermostat.tempIncrease();
      }
      expect(thermostat.currentEnergyUsage()).toEqual('high');
    });
  });
});
