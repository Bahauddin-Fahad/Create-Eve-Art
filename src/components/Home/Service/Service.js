import React from "react";
import { useNavigate } from "react-router-dom";
const Service = ({ service }) => {
  const { serviceName, serviceImg, description, price } = service;
  const navigate = useNavigate();

  return (
    <div className="border-2 rounded-md p-3 mx-auto shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_2px_6px] flex flex-col items-center justify-around hover:scale-105 opacity-90 hover:opacity-100 duration-500 max-w-sm">
      <img
        className="rounded-md w-11/12 mx-auto mt-2"
        src={serviceImg}
        alt=""
      />
      <h2 className="text-2xl font-semibold mt-2">{serviceName}</h2>
      <h3 className=" text-lg font-semibold">Price: {price}</h3>
      <h6 className="w-11/12 mx-auto text-justify">{description}</h6>

      <button
        onClick={() => navigate("/checkout")}
        className=" bg-gray-800 text-white font-medium py-1 px-3 mt-3 rounded-md"
      >
        Book: {serviceName}
      </button>
    </div>
  );
};

export default Service;
