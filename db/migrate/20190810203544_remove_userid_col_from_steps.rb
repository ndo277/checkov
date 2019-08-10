class RemoveUseridColFromSteps < ActiveRecord::Migration[5.2]
  def change
    remove_column :steps, :user_id
  end
end
