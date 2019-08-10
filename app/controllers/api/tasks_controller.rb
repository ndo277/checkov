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

  def update  
    @task = Task.find(params[:id])

    if @task.update(task_params) 
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy 
    @task  = Task.find(params[:id])

    if @task.destroy
      render json: ["Task deleted"]
    else 
      render json: ["Unable to delete task"], status: 404 
    end

  end


  private

  def task_params
    params.require(:task).permit(:body, :checked)
  end
end