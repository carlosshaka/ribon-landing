Rails.application.routes.draw do
  resources :clients
  resources :contacts
  get 'proposal', to: 'home#proposal'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
end
