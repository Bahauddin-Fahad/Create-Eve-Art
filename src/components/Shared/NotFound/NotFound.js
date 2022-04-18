import React from "react";
import notFound from "../../../Assets/images/404/404.mp4";
const NotFound = () => {
  return (
    <div className="py-10 bg-[#120913]">
      <video className="mx-auto" src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
