function Thermostat() {
  this.temp = 20;
}

Thermostat.prototype.tempIncrease = function () {
  this.temp++
};

Thermostat.prototype.tempDecrease = function () {
  this.temp--
};
