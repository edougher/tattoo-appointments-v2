class ImageController < ApplicationController

    def create
        #FirebaseImageUrl.create(image_url: 'test', appointment_id: 2)
        #appointment.firebase_image_url
        image = FirebaseImageUrl.create(image_url: params[:img], appointment_id: params[:appt_id])

        if(image)
            render json: image
        else
            render json: {msg: "img didnt save"}
        end
         
    end
end
