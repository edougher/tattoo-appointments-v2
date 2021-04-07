class AppointmentsController < ApplicationController
    
    def show 
        user = User.find(params[:id])
        if(user.username === "admin@d.com")
            appts = Appointment.all
            render json: appts
        else
            appts = Appointment.where(user_id: params[:id])
            render json: appts
        end
    end

    def update
        appt = Appointment.find(params[:id])
        appt.update(
            time: params[:time],
            cost: params[:cost],
            artistComments: params[:comments],
            status: 'approved'
        )
        newComments = {
            time: appt.time,
            cost: appt.cost,
            comments: appt.artistComments,
            status: appt.status
        }
        render json: newComments
    end

    def edit
        appt = Appointment.find(params[:id])
        appt.update( 
            width: params[:width], 
            height: params[:height],
            colors: params[:colors],
            location: params[:location], 
            note: params[:note],
            status: params[:status]
        )
        render json: appt
    end

    def destroy
        FirebaseImageUrl.where(:appointment_id => params[:id]).destroy_all
        Appointment.find(params[:id]).destroy
        render json: {delete_msg: 'delete success', appt_id: params[:id]}
    end
    
    
    def create
        appt = Appointment.create(
            user_id: params[:user_id],
            colors: params[:colors],
            width: params[:width], 
            height: params[:height], 
            location: params[:location], 
            note: params[:comments],
            status: params[:status],
            )
        if appt
            render json: appt
        else
            render json: {error: 'Oops, something went wrong...'}
        end
        
    end
end