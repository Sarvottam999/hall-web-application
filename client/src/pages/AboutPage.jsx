import React from "react";

export default function AboutPage() {
  return (
    <div className="mt-[130px]">
      <div className="flex flex-col items-center text-center bg-pink-50 px-[20%] py-10">
        <h2 className="text-6xl text-pink-500">About</h2>
        <span className="text-xl mt-4 mb-8  ">
          Welcome to WedHall, where dreams become unforgettable moments. We
          understand that planning a wedding can be both exhilarating and
          overwhelming. <br />
          <br /> That's why we're here to make the process as seamless and
          stress-free as possible. At WedHall, we're passionate about helping
          couples bring their visions to life. Whether you're dreaming of an
          intimate ceremony or a grand celebration, we offer a curated selection
          of exquisite wedding halls to suit every style and budget. <br />{" "}
          <br /> Our team is dedicated to providing exceptional service from
          start to finish. From your initial inquiry to the moment you say "I
          do," we're here to guide you through every step of the planning
          process. With attention to detail and a commitment to excellence,
          we'll ensure that your special day is nothing short of perfection.
        </span>
      </div>
      <div className="flex flex-col items-center  px-[10%] py-20  bg-gradient-to-r from-yellow-400 to-pink-500 text-white">
        <div className=" text-5xl">Why Choose Us</div>
        <div className="flex flex-row text-center space-x-4" >
          <div className="mx-7">
            <div className="text-4xl text-indigo-900 mb-5">Exquisite Venues</div>
            <div className="text-xl">
              Discover a diverse range of stunning wedding halls, each offering
              its own unique charm and ambiance.
            </div>
          </div>
          <div>
            <div className="text-4xl text-indigo-900 mb-5">Personalized Service</div>
            <div className="text-xl">
              Our experienced team is here to listen to your needs and tailor
              our services to exceed your expectations.
            </div>
          </div>
          <div>
            <div className="text-4xl text-indigo-900 mb-5">Commitment to Excellence</div>
            <div className="text-xl">
              We're committed to delivering exceptional service and ensuring
              that your wedding day is everything you've ever imagined.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
