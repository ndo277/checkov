class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def login(user)
    session[:session_token] = user.reset_session_token
  end

  #cache current_user; used in root html
  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  # used in root html to bootstrap current user 
  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token if current_user
    session[:session_token] = nil
    @current_user = nil 
  end

end
