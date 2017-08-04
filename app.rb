require "json"
require "sinatra/base"

require_relative "./lib/thermostat.rb"

class Thermostat < Sinatra::Base
  # enable :sessions
  # set :session_secret, SecureRandom.hex(20)

  post '/thermostat' do
    response['Access-Control-Allow-Origin'] = '*'
    SavedThermostat.create(params[:thermostat], params[:city])
  end

  get '/thermostat' do
    response['Access-Control-Allow-Origin'] = '*'
    SavedThermostat.return
  end

  run! if app_file == $PROGRAM_NAME
end
