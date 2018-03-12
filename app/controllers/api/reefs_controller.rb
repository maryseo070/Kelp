class Api::ReefsController < ApplicationController

  def index
    @reefs = Reef.all
  end

  def show

    @reef = Reef.find(params[:id])
  end

end
