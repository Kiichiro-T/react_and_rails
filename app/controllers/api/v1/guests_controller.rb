class Api::V1::GuestsController < ApplicationController
  def create
    @guest = Guest.create(guest_params)
    @errors = @guest.errors.messages
    render 'api/v1/guests/result', formats: :json, handlers: 'jbuilder'
  end

  def guest_params
    params.require(:guest).permit(:name, :email)
  end
end
