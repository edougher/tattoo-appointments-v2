# README

* Models:
    - User
        - username
        - password
        
    - FirebaseImageUrl
        - image_url 
        - appointment_id(foreign-key)

    - TimeSlot
        - start
        - end
        - open_date_id(foreign-key)    

    - Appointment
        - user_id(foreign-key)
        - width
        - height
        - location
        - note
        - status
        - colors
        - time
        - cost
        - artistComments
    - OpenDate
        - date    
