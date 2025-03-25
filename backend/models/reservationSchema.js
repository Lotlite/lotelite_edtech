import mongoose from 'mongoose';
import validator from 'validator';




const reservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [30, "Name must be less than 30 characters long"],
    },
  
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email"],
    },
    message: {
        type: String,
        required: true,
        minlength: [10, "Message must be at least 10 characters long"],
        maxlength: [1000, "Message must be less than 1000 characters long"],
    },
    phone: {
        type: String,
        required: true,
        minlength: [10, "Phone number must be at least 10 digits long"],
        maxlength: [10, "Phone number must be less than 10 digits long"],
    },
  
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;

