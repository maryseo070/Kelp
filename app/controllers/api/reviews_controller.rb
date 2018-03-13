class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    @reef = @review.reef
    if @review.save
      render template: "api/reviews/show.json.jbuilder"
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  def show
    @review = Review.find(params[:id])
  end

private
  def review_params
    params
    .require(:review)
    .permit(:body, :rating, :date, :reef_id, :photos_attributes => [:image])
  end

end
