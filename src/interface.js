$(document).ready(function() {
  var thermostat = new Thermostat();
  var currentTemp;
  var currentCity = 'London';
  var weatherRequest;
  updateTemperature();
  getWeather();

  $('#temperature-up').on('click', function() {
    thermostat.tempIncrease();
    updateTemperature();
  });

  $('#temperature-down').on('click', function() {
    thermostat.tempDecrease();
    updateTemperature();
  });

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#toggle-powersaving').on('click', function () {
    thermostat.changePowerSavingMode();
    if(thermostat.isPowerSavingModeOn()) {
      $('#power-saving-status').text('on');
    } else {
      $('#power-saving-status').text('off');
    }
  });

  $('#get-weather').on('click', function() {
      getWeather();
  });

  $('#set-city').submit(function(event) {
    event.preventDefault();
    currentCity = $('#city-name').val();
    getWeather();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemp());
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
  }

  function getWeather() {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + currentCity;
    var units = '&units=metric';
    var key = '&APPID=f9a09435fd45e7e397f4dcadf4955a1d';
    $.get(url + units + key, function(apiResponse) {
        currentTemp = apiResponse.main.temp;
        updateWeather();
      });
  }

  function updateWeather() {
    $('#current-weather').text(currentTemp);
    $('#current-city').text(currentCity);
  }
});
