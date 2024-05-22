import {useContext, useEffect, useState} from "react";
import {differenceInCalendarDays} from "date-fns";
import axios from "axios";
import {Navigate} from "react-router-dom";
import { UserContext } from "../others/userContext.jsx";
// import {UserContext} from "./UserContext.jsx";

export default function BookingWidget({place}) {
  const [checkIn,setCheckIn] = useState('');
  const [checkOut,setCheckOut] = useState('');
  const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');




  const [numberOfGuests,setNumberOfGuests] = useState(1);
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const {user} = useContext(UserContext);
  const [available, setAvailable] = useState(null);
  const [redirect,setRedirect] = useState('');

  const [errors, setErrors] = useState({});


 


 const handleStartDateChange = (e) => {
    const selectedStartDate = e.target.value;
    setCheckIn(selectedStartDate)
    setStartDate(selectedStartDate);
    

    console.log(selectedStartDate);
    // Set minimum selectable end date to one day after the selected start date
    // setEndDate(new Date(new Date(selectedStartDate).getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  }

  async function bookThisPlace() {
    const response = await axios.post('/bookings', {
      checkIn,checkOut,numberOfGuests,name,phone,
      place:place._id,
      price:numberOfNights * place.price,
    });
    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  }


  const handleCheckAvailability = async (e) => {
    e.preventDefault();
    // console.log(checkIn, checkOut, place._id)
    try {
      // setLoading(true);
      // setError(null);

      // Make a GET request to the API endpoint
      const response = await axios.get(`/availability/${place._id}`, {
        params: { checkIn, checkOut }
      });

      // Update the available state based on the response
      console.log(response.data);
      setAvailable(response.data.available);
    } catch (error) {
      // setError('Error checking availability');
      console.error(error);
    } finally {
      // setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      bookThisPlace();
      console.log('Form submitted:');
    }
    console.log('Form not submitted:');

  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (numberOfGuests < 50) {
      formIsValid = false;
      errors.numberOfGuests = 'Number of guest should be more that 50';
    }

    if (!phone) {
      formIsValid = false;
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phone)) {
      formIsValid = false;
      errors.phoneNumber = 'Phone number must be 10 digits';
    }

    // const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!checkIn ) {
      formIsValid = false;
      errors.checkIn = 'checkIn date is required';
      // setError('Date must be in YYYY-MM-DD format');
    }  

    if (!checkOut ) {
      formIsValid = false;
      errors.checkOut = ' check Out date is required';
      // setError('Date must be in YYYY-MM-DD format');
    }  

  
    // if (!formData.email) {
    //   formIsValid = false;
    //   errors.email = 'Email is required';
    // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   formIsValid = false;
    //   errors.email = 'Email is invalid';
    // }

    // if (!formData.password) {
    //   formIsValid = false;
    //   errors.password = 'Password is required';
    // } else if (formData.password.length < 6) {
    //   formIsValid = false;
    //   errors.password = 'Password must be at least 6 characters';
    // }

    setErrors(errors);
    return formIsValid;
  };

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <form  >

      <div className="text-2xl text-center">
        Price: ₹{place.price} per plate
      </div>
      <div className="border rounded-2xl mt-4">

        <div className="flex">
          <div className="py-3 px-4">
            <label>Check in:</label>
            <input type="date"
            min={new Date().toISOString().split('T')[0]}
            max="2024-12-31" 
            required
            value={checkIn}
            // 
            onChange={handleStartDateChange}
            //  onChange={ev => setCheckIn(ev.target.value)}
            />
          </div>
          <div className="py-3 px-4 border-l">
            <label>Check out:</label>
            <input type="date" value={checkOut} 
            // min={new Date().toISOString().split('T')[0]}
            min={startDate}
            max="2024-12-31" 
            required
                   onChange={ev => setCheckOut(ev.target.value)}/>
          </div>
        </div>
        <div className="py-3 px-4 border-t">
          <label>Number of guests:</label>
          <input type="number" required
                 value={numberOfGuests}
                 onChange={ev => setNumberOfGuests(ev.target.value)}/>
        </div>
        {numberOfNights > 0 && (
          <div className="py-3 px-4 border-t">
            <label>Your full name:</label>
            <input type="text" required
            disabled
                   value={name}
                   onChange={ev => setName(ev.target.value)}/>
            <label>Phone number:</label>
            <input type="tel" required
                   value={phone}
                   onChange={ev => setPhone(ev.target.value)}/>
          </div>
        )}
      </div>


      

    
      {available !== null && (
        <p className=" text-center text-red-600 text-3xl">{available ? 'Hotel is available!' : 'Hotel is not available!'}</p>
      )}

{errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
{errors.numberOfGuests && <p className="error">{errors.numberOfGuests}</p>}
{errors.checkIn && <p className="error">{errors.checkIn}</p>}
{errors.checkOut && <p className="error">{errors.checkOut}</p>}



      <button className="primary mt-4" onClick={handleCheckAvailability} >
        {/* //disabled={!place._id || !checkIn || !checkOut  } */}
        Check Availability
      </button>


      <button onClick={
        handleSubmit
      } className="primary mt-4">
        Book this place
        {numberOfNights > 0 && (
          <span> ₹ {numberOfNights * place.price}</span>
        )}
      </button>
      </form >

    </div>
  );
}