json = ActiveSupport::JSON.decode(File.read('db/seeds/products.json'))

json['products'].each do |a|
  # puts a['name']
  product = Product.create!({
    _id: a['_id'],
    name: a['name']
  })
  a['images'].each do |b|
    puts product.id
    image = Image.create!({
      product_id: product.id, 
      url: b['url']  
    })
    puts product.id
    puts image.product_id
 
  end
end
