class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.text :body, null: false
      t.boolean :checked, default: false
      t.integer :user_id, null: false
      t.integer :task_id, null: false
      t.timestamps
    end

    add_index :steps, :user_id
    add_index :steps, :task_id
  end
end
