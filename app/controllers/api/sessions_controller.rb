class Api::SessionsController < ApplicationController
  # before_action :require_login, only: :destroy

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid credentials'], status: 403
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out
      render '/api/users/show'
    else
      render json: ["Nobody is signed in"], status: 404
    end
  end
end
