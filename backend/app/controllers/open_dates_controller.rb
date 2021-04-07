class OpenDatesController < ApplicationController

    def index 
        allDates = OpenDate.all
        datesAndTimeSlots = allDates.map{|date| {date: date, timeslots: date.time_slots}}
        render json: datesAndTimeSlots

    end

    
    def create
        date = OpenDate.find_or_create_by(date: params[:date])
        timeslot = TimeSlot.create(start: params[:startTime], end: params[:endTime], open_date_id: date.id)

        if(timeslot && date)
            render json: {timeslot: timeslot, date: date}
        else
            render json: {message: 'Something went wrong'}
        end
        
    end
end