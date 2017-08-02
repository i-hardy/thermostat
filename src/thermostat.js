function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temp = this.DEFAULT_TEMP;
  this.isPowerSavingModeOn = true
}

Thermostat.prototype.tempIncrease = function () {
  if (this.temp === this.getMaxTemp()) {
    throw 'Maximum temp reached'
  } else {
    this.temp++
  }
};

Thermostat.prototype.tempDecrease = function () {
  if (this.temp === 10) {
    throw 'Minimum temp reached!'
  } else {
    this.temp--
  }
};

Thermostat.prototype.getMaxTemp = function () {
  if (this.isPowerSavingModeOn) {
    return 25
  } else {
    return 32
  }
};

Thermostat.prototype.changePowerSavingMode = function () {
  this.isPowerSavingModeOn = !this.isPowerSavingModeOn
};

Thermostat.prototype.reset = function () {
  this.temp = this.DEFAULT_TEMP
};

Thermostat.prototype.currentEnergyUsage = function () {
  if (this.temp < 18) {
    return 'low'
  } else if (this.temp < 25) {
    return 'medium'
  } else {
    return 'high'
  }
};
