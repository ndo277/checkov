@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :user_id, :body, :checked
  end
end