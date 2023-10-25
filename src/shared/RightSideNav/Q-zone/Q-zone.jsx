import React from "react";
import Qzone1 from "../../../assets/qZone1.png";
import Qzone2 from "../../../assets/qZone2.png";
import Qzone3 from "../../../assets/qZone3.png";

const Qzone = () => {
  return (
    <div className="bg-body-tertiary rounded p-2 my-4">
      <h3>Q-zone</h3>
      <div className="text-center">
        <img src={Qzone1} alt="" />
        <img src={Qzone2} alt="" />
        <img src={Qzone3} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
