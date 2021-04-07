class UsersController < ApplicationController
    
    def show
        
        username = params[:username] + '.com'
        user = User.find_by(username: username)
        if user.username == "admin@d.com"
            appts = Appointment.all
            imgs = appts.map{|x| x.firebase_image_urls}
            render json: {user: user, appts: appts, imgs: imgs}
        elsif user && user.appointments
            appts = Appointment.where(user_id: user.id)
            imgs = appts.map{|x| x.firebase_image_urls}
            #return images seperately and filter them in the from.
            render json: {user: user, appts: appts, imgs: imgs}
        else 
            appts = nil
            render json: {error: 'Invalid username or password.'}
        end
        #elseif user.appointments
        #    appts = user.appointments
        #else
        #    appts = nil
        #end

        ##if user.appointments
        ##    appts = user.appointments
        ##else
        ##    appts = nil
        ##end
        
        # if user
        #     render json: {user: user, appts: appts}
        # else
        #     render json: {error: 'Invalid username or password.'}
        # end
    end
    
    
    
    def create
        user = User.find_or_create_by(username: params[:email])
        appts = user.appointments

        if user
            render json: {user: user, password: params[:password], appts: appts}
        else
            render json: {error: 'Invalid username or password.'}
        end
    end

end
