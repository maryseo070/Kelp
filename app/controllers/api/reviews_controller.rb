class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    if @review.save
      byebug
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
    params.require(:review).permit(:body, :rating, :date, :reef_id)
  end

end
