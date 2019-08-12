Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] 
    resource :session, only: [:create, :destroy]
    resources :tasks, only: [:index, :create, :update, :destroy] do    
      resources :steps, only: [:index, :create]
    end
    resources :steps, only: [:update, :destroy]
  end

  root to: 'static_pages#root' 
end
