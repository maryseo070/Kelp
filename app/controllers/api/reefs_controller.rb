class Api::ReefsController < ApplicationController

  def index
    @reefs = Reef.all
    @ratings = Reef.find_average_ratings
  end

  def show
    @reef = Reef.find(params[:id])
  end

end
