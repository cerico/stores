# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171111200355) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "images", force: :cascade do |t|
    t.integer  "product_id"
    t.string   "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string   "_id"
    t.text     "slug"
    t.text     "name"
    t.text     "description"
    t.text     "sizes",                                           array: true
    t.text     "standard_manufacturer"
    t.text     "manufacturer"
    t.string   "gtin"
    t.string   "sync_ref_id"
    t.string   "sync_remote_id"
    t.string   "archived_by"
    t.string   "sync_provider"
    t.string   "sync_integration_id"
    t.text     "sync_categories",       default: [],              array: true
    t.text     "details"
    t.boolean  "stock"
    t.float    "value"
    t.integer  "quantity"
    t.string   "marked_as_oos_at"
    t.string   "weight"
    t.float    "price"
    t.text     "colors",                default: [],              array: true
    t.text     "styles",                default: [],              array: true
    t.integer  "qs"
    t.text     "boutiques",             default: [],              array: true
    t.text     "brand"
    t.text     "categories",            default: [],              array: true
    t.boolean  "published"
    t.boolean  "featured"
    t.boolean  "shipping_enabled"
    t.string   "shipping_size"
    t.text     "tags",                                            array: true
    t.boolean  "unsuitable_for_trouva"
    t.boolean  "experiment_urgency"
    t.integer  "experiment_quantity"
    t.boolean  "unsuitable"
    t.boolean  "pending"
    t.boolean  "archived"
    t.boolean  "can_be_published"
    t.string   "first_published_at"
    t.text     "amendment_stats"
    t.text     "pinterest_pins",        default: [],              array: true
    t.text     "backup_boutiques",      default: [],              array: true
    t.text     "backup_sizes",          default: [],              array: true
    t.text     "links"
    t.datetime "updated_at",                         null: false
    t.string   "featured_at"
    t.text     "thumbnail"
    t.datetime "created_at",                         null: false
  end

end
