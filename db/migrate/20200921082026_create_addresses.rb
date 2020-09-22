class CreateAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :addresses do |t|
      t.integer :postcode
      t.integer :prefecture_code
      t.string :address_city
      t.string :address_building

      t.timestamps
    end
  end
end
