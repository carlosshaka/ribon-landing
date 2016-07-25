class CreateLetters < ActiveRecord::Migration[5.0]
  def change
    create_table :letters do |t|
      t.string :title
      t.string :logo
      t.string :body, array: true, default: []

      t.timestamps
    end
  end
end
