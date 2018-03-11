class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 403
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def photo_params
    params.require(:photo).permit(:image)
  end
end
