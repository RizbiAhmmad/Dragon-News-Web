import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start"> <FaFacebook></FaFacebook></button>
        <button className="btn join-item justify-start"><FaInstagram></FaInstagram></button>
        <button className="btn join-item justify-start"><FaTwitter></FaTwitter></button>
      </div>
    </div>
  );
};

export default FindUs;
