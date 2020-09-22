class Api::V1::AddressesController < ApplicationController
  def index
    @prefectures = JpPrefecture::Prefecture.all
  end
end
