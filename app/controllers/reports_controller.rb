class ReportsController < ApplicationController
  def new
    @report = Report.new
  end

  def create
    @report = Report.new(report_params)
    if @report.save
      redirect_to report_path(@report.id)
    else
      render 'new'
    end
  end

  def show
    @report = Report.find(params[:id])
  end

  def index
    @reports = Report.all
  end

  private

  def report_params
    params.require(:report).permit(:user_email, :text, photos: [])
  end
end
