import axios from "axios";
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("services.json").then((data) => setServices(data.data));
  }, []);
  return (
    <div className="my-10 mx-11">
      <h1 className="text-4xl text-center font-bold mb-4">Our Services</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
