Rails.application.routes.draw do
  resources :contacts
  get 'propose', to: 'home#propose'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
end
