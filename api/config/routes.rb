Rails.application.routes.draw do
  resources :products,   :path => :parties, :as => :parties
end
