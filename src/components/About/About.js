import React from "react";
import Profile from "../../Assets/images/profile/profile.jpg";
const About = () => {
  return (
    <div className="min-h-[calc(100vh-264px)] w-8/12 mx-auto flex flex-col lg:flex-row items-center rounded-r-md m-5">
      <div className="w-full lg:w-1/2 lg:mb-0 sm:mb-4 ">
        <img className="w-9/12 mx-auto rounded-xl" src={Profile} alt="" />
      </div>
      <div className="w-full lg:w-1/2 shadow-[rgba(0,0,0,0.19)_0px_20px_20px,rgba(0,0,0,0.23)_0px_3px_6px] rounded-lg p-3">
        <p className="text-justify text-md font-semibold mb-0">
          My goals are to become a Certified Professional Photographer through
          Professional Photographers. It consists of a comprehensive exam (which
          I passed a few months ago) and an image submission of 15 images. I'm
          hoping to submit my images before then end of the year. After that I
          would love to work on my Masters of Photography degree by receiving
          merits for general or loan images in the International Photographic
          Competition. I would also like to earn my Photographic Craftsman
          degree, which is earned by teaching and speaking. I love to teach and
          would love to help others succeed in business and grow their craft!
        </p>
        <h5 className="text-right mt-1 mb-0 text-red-600 text-2xl font-bold">
          S.M. Bahauddin Fahad
        </h5>
      </div>
    </div>
  );
};

export default About;
