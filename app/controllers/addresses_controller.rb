class AddressesController < ApplicationController
  def new
    @address = Address.new
    @addresses = Address.all
  end

  def create
    @address = Address.new(address_params)
    if @address.save
      redirect_to new_address_path
    else
      @addresses = Address.all
      render 'new'
    end
  end

  def address_params
    params.require(:address).permit(:postcode, :prefecture_code, :address_city, :address_building)
  end
end
