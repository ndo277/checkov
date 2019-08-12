class Api::StepsController < ApplicationController
  def index
    @task = Task.find(params[:task_id])
    @steps = @task.steps
  end

  def create  
    @task = Task.find(params[:task_id])
    @step = Step.new(step_params)
    @step.task_id = @task.id
    
    if @step.save 
      render :show
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def update  
    @step = Step.find(params[:id])

    if @step.update(step_params) 
      render :show
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def destroy 
    @step  = Step.find(params[:id])

    if @step.destroy
      render json: ["Step deleted"]
    else 
      render json: ["Unable to delete step"], status: 404 
    end

  end


  private

  def step_params
    params.require(:step).permit(:body, :checked, :task_id)
  end
end