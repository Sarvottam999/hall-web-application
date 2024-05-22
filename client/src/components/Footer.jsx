import React from "react";
import facebook from "../assets/Facebook.svg";
import twitter from "../assets/twitter.svg";

import instagram from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import linkdin from "../assets/Linkdin.svg";

export default function Footer() {
  return (
    //     <div class="bg-primary text-white py-4">
    //     <div class="container mx-auto flex justify-between">
    //       <div class="flex flex-col">
    //         <div class="font-bold">Company</div>
    //         <a href="#" class="hover:text-gray-300">About Us</a>
    //         <a href="#" class="hover:text-gray-300">Team</a>
    //         <a href="#" class="hover:text-gray-300">Contact Us</a>
    //       </div>
    //       <div class="flex flex-col">
    //         <div class="font-bold">Resources</div>
    //         <a href="#" class="hover:text-gray-300">FAQ</a>
    //         <a href="#" class="hover:text-gray-300">Create Event Website</a>
    //         <a href="#" class="hover:text-gray-300">List With Us</a>
    //       </div>
    //     </div>
    //   </div>

    <div className="w-full">
      <div className="flex justify-evenly bg-pink-600 text-white pt-16">
       
       

        <div>
          <div className="text-2xl">Contact</div>
          <div>Inquiries</div>
          <div>PR & Collaboration</div>
          <div>Career</div>
        </div>

        <div>
          <div className="text-2xl">Explore</div>
          <div>Exclusive</div>
          <div>Honeymoon</div>
          <div>Deals & Offers</div>
          <div>Hire an Expert</div>
        </div>



        <div>
          <div className="text-2xl">About</div>
          <div>Company</div>
          <div>Testimonial</div>
          <div>Blogs</div>
          <div>List Property</div>
          <div>Privacy Policy</div>
          <div>Terms & Conditions</div>
          <div>FAQ's</div>
        </div>


        
        <div>

        </div>

        {/* <div>
          <div className="text-2xl flex"> </div>
          <div className="flex space-x-3">
            <div>
              <img className="w-7 h-7" src={facebook} alt="" />
            </div>
            <div>
              <img className="w-7 h-7" src={twitter} alt="" />
            </div>

            <div>
              <img className="w-7 h-7" src={instagram} alt="" />
            </div>

            <div>
              <img className="w-7 h-7" src={linkdin} alt="" />
            </div>

            <div>
              <img className="w-7 h-7" src={whatsapp} alt="" />
            </div>
          </div>
        </div> */}
      </div>

      <div>
        <div className="h-10 bg-pink-600 w-full flex justify-center">
          &#169; 2024 WedHall.com
        </div>
      </div>
    </div>
  );
}
