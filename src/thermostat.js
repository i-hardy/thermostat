function Thermostat() {
  this.temp = 20;
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
