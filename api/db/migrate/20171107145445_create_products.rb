class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|

      t.string :_id
      t.text :slug
      t.text :name
      t.text :description
      t.text :sizes, array: true
      t.text :standard_manufacturer
      t.text :manufacturer
      t.string :gtin
      t.string :sync_ref_id
      t.string :sync_remote_id
      t.string :archived_by
      t.string :sync_provider
      t.string :sync_integration_id
      t.text :sync_categories, array: true
      t.text :details
      t.boolean :stock
      t.float :value
      t.integer :quantity
      t.string :marked_as_oos_at
      t.string :weight
      t.float :price
      t.text :colors, default:[],array:true
      t.text :styles, default:[],array:true
      t.integer :qs
      t.text :boutiques, default:[],array:true
      t.text :sync_categories, default:[],array:true
      t.text :brand 
      t.text :categories, default:[],array:true
      t.boolean :published
      t.boolean :featured
      t.boolean :shipping_enabled
      t.string :shipping_size
      t.text :tags, array:true
      t.boolean :unsuitable_for_trouva
      t.boolean :experiment_urgency
      t.integer :experiment_quantity
      t.boolean :unsuitable
      t.boolean :pending
      t.boolean :archived
      t.boolean :can_be_published
      t.string :first_published_at
      t.text :amendment_stats
      t.text :pinterest_pins, default:[],array:true
      t.text :backup_boutiques, default:[],array:true
      t.text :backup_sizes, default:[],array:true
      t.text :links 
      t.string :updated_at
      t.string :featured_at
      t.text :thumbnail

      t.timestamps null: false
    end
  end
end
