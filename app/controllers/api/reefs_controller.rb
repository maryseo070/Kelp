class Api::ReefsController < ApplicationController

  def index
    @reefs = Reef.all
    @ratings = Reef.find_average_ratings
    # @reefs.each do |reef|
    #   reef.reviews.each do |review|
    #     if review.photos
    #       @pic = review.photos[0]
    #     else
    #       @pic = nil
    #     end
    #   end
    # end
  end

  def show
    @reef = Reef.find(params[:id])
  end

end
