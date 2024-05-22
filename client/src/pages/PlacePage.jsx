import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddressLink from '../components/AddressLink';
import PlaceGallery from '../components/PlaceGallery';
import BookingWidget from '../components/BookingWidget';

export default function PlacePage() {

    const {id} = useParams();
    const [place,setPlace] = useState(null);
    useEffect(() => {
      if (!id) {
        return;
      }
      axios.get(`/places/${id}`).then(response => {
        console.log(`place data   ======> ${JSON.stringify(response.data)}`)
        setPlace(response.data);
      });
    }, [id]);
  
    if (!place) return '';
    // if (place) return console.log(`place data   ======> ${place.checkOut}`);

  
  
  
    return (
      <div className="mt-4   mx-[15%] py-28 text-xl  ">
        <h1 className="text-5xl ">{place.title}</h1>
        <AddressLink>{place.address}</AddressLink>
        <div className='h-7'></div>
        <PlaceGallery place={place} />
        <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
          <div>
            <div className="my-4">
              <h2 className="font-semibold text-4xl">Description</h2>
              {place.description}
            </div>
            Check-in: {place.checkin}<br />
            Check-out: {place.checkput}<br />
            Max number of guests: {place.maxGuest}
          </div>
          <div>
            <BookingWidget place={place} />
          </div>
        </div>
        <div className="bg-white -mx-8 px-8 py-8 border-t">
          <div>
            <h2 className="font-semibold text-2xl">Extra info</h2>
          </div>
          <pre className="mb-4 mt-2 text-gray-700 leading-5">{place.extraInfo}</pre>
        </div>
      </div>
    );
  }