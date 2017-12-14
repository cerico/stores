json.array!(@images) do |image|
  json.extract! image, :id, :product_id, :url
  json.url image_url(image, format: :json)
end
