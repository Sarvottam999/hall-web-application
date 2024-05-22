import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ExplorPage() {
  const [searchName, setSearchName] = useState("");
  const [result, setResult] = useState([]);

    const  setTopic =(v) =>
  {
    console.log(v.target.value);
    setSearchName(v.target.value);

  }




  useEffect(() => {
    axios.get("/places").then((res) => {
      setResult(res.data);
      console.log(`result ${result}`);

      console.log(result);
    });
  }, []);

  function searchByName(e) {
    e.preventDefault();

    console.log(searchName

    );
    axios
      .get("/places-by-name", {
        params: { name: searchName },
      })
      .then((res) => {
        setResult(res.data);
        console.log(result);
      });
  }

  return (
    <div className="mt-[100px]    py-10 w-[90%] mx-auto">
      <form class="max-w-md mx-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
          onChange={setTopic}
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            onClick={searchByName}
            class="text-white absolute end-2.5 bottom-2.5 bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          >
            Search
          </button>
        </div>
      </form>

      {/* --------------------------------------- */}

      <div className=" grid  gap-x-16 gap-y-10    sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-5 mt-20     ">
        {/* //gap-x-16 gap-y-8 */}
        {result.length > 0 &&
          result.map((place) => (
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
    </div>
  );
}
