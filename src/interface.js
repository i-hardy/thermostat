$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.tempIncrease();
    updateTemperature();
  })

  $('#temperature-down').on('click', function() {
    thermostat.tempDecrease();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#toggle-powersaving').on('click', function () {
    thermostat.changePowerSavingMode();
    if(thermostat.isPowerSavingModeOn()) {
      $('#power-saving-status').text('on')
    } else {
      $('#power-saving-status').text('off')
    }
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemp());
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
  };
});
