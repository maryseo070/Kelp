class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)
    if @reivew.save
      render template: "api/reefs/show.json.jbuilder"
    else
      render json: @reivew, status: :unprocessable_entity
    end
  end

  def show
    @review = Reivew.find(params[:id])
  end

private
  def review_params
    params.require(:review).permit(:title, :body, :rating)
  end

end
