class Api::V1::CommentsController < ApplicationController
  def index
    beginning_of_month = params[:selected_month].to_date
    end_of_month = beginning_of_month.end_of_month
    @comments = Comment.where(date: beginning_of_month..end_of_month)
    months = Comment.all.group('YEAR(date)').group('MONTH(date)').count.keys
    @months = months.map {|month| month[0].to_s + '/' + ('0' + month[1].to_s).slice(-2, 2)}
  end
end
