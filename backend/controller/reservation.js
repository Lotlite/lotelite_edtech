import ErrorHandler from "../error/error.js";
import Reservation from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    console.log("Request body:", req.body);
    const { firstName, lastName, email, phone, message } = req.body;
    
    // Create a name from firstName and lastName
    const name = `${firstName} ${lastName}`.trim();
    
    if(!name || !phone || !email || !message) {
        return next(new ErrorHandler("Please fill all the required fields", 400));
    }
    
    try{
        await Reservation.create({ 
            name, 
            email, 
            phone, 
            message 
        });
        
        res.status(200).json({
            success: true,
            message: "Your message has been sent successfully",
        });
    } catch(error){
        console.error("Error creating reservation:", error);
        if(error.name === "ValidationError"){
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }
        return next(error);
    }
};

   
    
