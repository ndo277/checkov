class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.text :body, null: false
      t.boolean :checked, default: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :tasks, :user_id
  end
end
