class CreateUserparams < ActiveRecord::Migration[5.1]
  def change
    create_table :userparams do |t|
      t.integer :user_id
      t.string :firstname
      t.string :lastname
      t.string :age
      t.integer :score, default: 0

      t.timestamps
    end
    add_index :userparams, :user_id
  end
end
