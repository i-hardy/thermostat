'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temp = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemp = function () {
  return this.temp;
};

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode;
};

Thermostat.prototype.tempIncrease = function () {
  if (this.temp === this.getMaxTemp()) {
    throw 'Maximum temp reached';
  } else {
    this.temp++;
  }
};

Thermostat.prototype.tempDecrease = function () {
  if (this.temp === 10) {
    throw 'Minimum temp reached!';
  }
  this.temp--;
};

Thermostat.prototype.getMaxTemp = function () {
  if (this.isPowerSavingModeOn()) {
    return 25;
  }
  return 32;
};

Thermostat.prototype.changePowerSavingMode = function () {
  this.powerSavingMode = !this.powerSavingMode;
};

Thermostat.prototype.reset = function () {
  this.temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.currentEnergyUsage = function () {
  if (this.temp < 18) {
    return 'low';
  } if (this.temp < 25) {
    return 'medium';
  }
  return 'high';
};
