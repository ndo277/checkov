Rails.application.routes.draw do
  namespace :api, defaults {format: :json} do

  end
  
  root to: 'static_pages#root'  
end
