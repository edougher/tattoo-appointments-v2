Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post '/user', to: 'users#create'
  get '/user/:username', to: 'users#show'
  
  post '/appointment', to: 'appointments#create'
  get '/appointments/:id', to: 'appointments#show'
  
  patch '/appointments/:id', to: 'appointments#edit'
  patch 'artistcomments/:id', to: 'appointments#update'
  delete '/appointments/:id', to: 'appointments#destroy'

  post '/dates', to: 'open_dates#create'
  get '/dates', to: 'open_dates#index'

  post '/image', to: 'image#create'
  
end
