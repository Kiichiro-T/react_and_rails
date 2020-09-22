Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root 'pages#my_todo_items', as: :authenticated_root
  end
  root 'pages#home'
  resources :comments, only: %i[index]
  resources :addresses, only: %i[new create]
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :todo_items, only: [:index, :show, :create, :update, :destroy]
      resources :comments, only: %i[index]
      resources :addresses, only: %i[index]
    end
  end
end
