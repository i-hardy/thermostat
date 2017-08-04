class SavedThermostat
  def self.create(json)
    @json = json
  end

  def self.return
    @json
  end
end
