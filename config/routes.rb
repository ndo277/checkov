Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do  
      resources :tasks, only: [:index, :create]
    end
    resource :session, only: [:create, :destroy]
    resources :tasks, only: [:show, :update, :destroy]
  end

  root to: 'static_pages#root' 
end
