require "json"

class SavedThermostat
  def self.create(thermostat, city)
    @thermostat = thermostat
    @city = city
  end

  def self.return
    {thermostat: @thermostat, city: @city}.to_json
  end
end
