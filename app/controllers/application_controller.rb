class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def log_out
    @current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    @current_user = user
    session[:session_token] = @current_user.reset_session_token!
  end

  def require_login
    # render json: {error: ['Must be logged in']}, status: 401 unless logged_in?
    render json: {base: ['Invalid Credentials']}, status: 401 if !current_user

  end

end
