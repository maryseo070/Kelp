class Api::ReefsController < ApplicationController

  def index
    @reefs = Reef.all
    @ratings = Reef.find_average_ratings

  end

  def show
    @reef = Reef.find(params[:id])
  end

  def search
    @reefs = Reef.all
    query_params = params[:query]
    # {query => {state}}
    if query_params[:name].present?
      @reefs = Reef.where("name ILIKE ?", "%#{query_params[:name]}%")
      @reefs.each do |reef|
        @ratings = Reef.find_average_ratings
      end

      # @reefs = Reef.where('name ~ ?', query_params[:name])
      # @reefs = Reef.where('name ~ ?', query_params[:name])
      # @ratings = Reef.find_average_ratings
      # if query_params[:rating]
      # @reefs where ratings > query_params[:rating]
    else
      @reefs = Reef.none
    end
    render :index
  end

end



# @reefs = Reef.where("name ILIKE ?", "%#{query_params[:name]}%")
# @reefs = Reef.where('name ~ ?', query_params[:name])
# @ratings = Reef.find_average_ratings
# if query_params[:rating]
# @reefs where ratings > query_params[:rating]
# @reefs
