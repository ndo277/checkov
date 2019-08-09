class Api::TasksController < ApplicationController
  def index
    @tasks = current_user.tasks
  end

  def create  
    @task = Task.new(task_params)
    @task.user_id = current_user.id
    
    if @task.save 
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end


  private

  def task_params
    params.require(:task).permit(:body, :checked)
  end
end