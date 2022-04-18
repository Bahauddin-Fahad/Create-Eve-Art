import axios from "axios";
import React, { useEffect, useState } from "react";
import Photo from "../Photo/Photo";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios.get("photos.json").then((data) => setPhotos(data.data));
  }, []);
  return (
    <div className="mx-16 mt-16 mb-8">
      <h2 className=" text-center font-bold mb-4">Check These Out</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Photos;
