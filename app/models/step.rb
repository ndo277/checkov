class Step < ApplicationRecord
  validates :task_id, presence: :true
  validates :body, presence: :true

  belongs_to :task 

end