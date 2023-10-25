import React from "react";
import NavigationBar from "../../shared/Header/Naveber/Navbar";

const AboutPage = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>

      <div className="w-50 mx-auto">
        <h3 className="my-5 text-capitalize text-center">About Us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          blanditiis sequi enim quas, voluptatibus et rem perferendis inventore
          dolorem culpa error odit doloribus?
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
