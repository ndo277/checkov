@steps.each do |step|
  json.set! step.id do
    json.extract! step, :id, :task_id, :body, :checked
  end
end