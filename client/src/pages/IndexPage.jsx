import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Slideshow from "../components/SlideShow.jsx";
import welcomeimg from "../assets/welcome.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    axios.get("/places").then((res) => {
      setPlaces(res.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("/places-by-name", {
        params: { name: searchName },
      })
      .then((res) => {
        setPlaces(res.data);
      });
  }, [searchName]);


  const handleChange = (event) => {
    setSearchName(event.target.value);
  };
  return (
    <div className="flex justify-center flex-col items-center mx-auto">
      {/* <div className=" m-5 flex  w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 justify-evenly gap-2 border border-gray-300 rounded-full py-1 px-4 shadow-md  shadow-gray-300">
        <input
          className="h-10 "
          type="text"
          value={searchName}   
          onChange={handleChange}
          placeholder="Search by name"
        />
      </div> */}

      <h1 className="text-black text-5xl mt-32 w-full  text-cente flex   justify-center items-center">
        <div className="h-[2px] bg-red-700 w-80 mr-4"></div>
        Trending
        <div className="h-[2px] bg-red-700 w-80 ml-4"></div>
      </h1>

      <div className="text-center mt-3 text-xl">
        Find our hottest properties that are making a buzz this week
      </div>

      <div className=" grid  gap-x-16 gap-y-10    sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 mt-20  md:  w-[85%] mb-5">
        {/* //gap-x-16 gap-y-8 */}
        {places.length > 0 &&
          places.slice(0, 4).map((place) => (
            <Link
              to={"/place/" + place._id}
              className=" relative border border-solid border-gray-200 rounded-2xl shadow-lg hover:z-10 hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="  bg-gray-500 mb-2 rounded-2xl flex ">
                {place.photos?.[0] && (
                  <img
                    className="rounded-2xl object-cover aspect-square h-[230px] w-full"
                    src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                    alt=""
                  />
                )}

                {/* <div className="text-white absolute  bg-black  float-left mr-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

                </div> */}
              </div>
              <div className=" pl-4 pr-4 pb-4 pt-4">
                <h2 className="font-bold text-xl line-clamp-2 ">
                  {place.title}
                </h2>
                <h3 className="text-sm text-gray-500 mt-3 line-clamp-2">
                  {place.address}
                </h3>
                <div className="mt-1 flex justify-between mt-3">
                  <div>
                    <span className="font-bold">${place.price}</span> per day
                  </div>
                  <div className="flex text-red-500 items-center">
                    view{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 ml-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className="flex px-[6%] my-32">




        <div className="w-[50%]   ">
          <img className="h-[500px]  w-[50%] m-auto" src={welcomeimg} alt="" />
        </div>







        <div className="w-[50%]">
          <div className="text-red-600 text-8xl">Event..  <span className="ml-10">Elegance.. </span>Unleashed..</div>
          <div className="mt-8">
           <span className="text-6xl" > Welcome </span> 
           <span className="text-2xl">to <span className="text-red-600"> WedHall</span>, your premier destination for
            seamless event planning. We specialize in connecting customers with
            the perfect venue for their special occasions, be it weddings, haldi
            ceremonies, mehndi nights, and more. With our user-friendly
            platform, customers can effortlessly discover and book exquisite
            halls suited to their unique preferences and requirements. Whether
            you're envisioning a grand celebration or an intimate gathering,
            we're here to make your event dreams a reality. Explore our curated
            selection of venues and embark on your journey to creating
            unforgettable memories today.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
