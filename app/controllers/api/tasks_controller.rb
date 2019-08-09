class Api::TasksController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @tasks = @user.tasks
  end

  def create  
    @user = User.find(params[:user_id])
    @task = Task.new(task_params)
    @task.user_id = @user.id
    
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