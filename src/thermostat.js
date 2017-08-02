function Thermostat() {
  this.temp = 20;
}

Thermostat.prototype.tempIncrease = function () {
  this.temp++
};

Thermostat.prototype.tempDecrease = function () {
  if (this.temp === 10) {
    throw 'Minimum temp reached!'
  } else {
  this.temp--
  }
};
