import React from "react";
import hw from "../../../assets/All-images/hybridwork.png.png";

const Togethers = () => {
  return (
    <div className="">
      <div className="grid gap-4 grid-cols-2 my-5 p-20 ">
        <div>
          <div className=" my-24">
            <h1 className="text-4xl font-bold ">
            Work together, <br /> wherever you work
            </h1>{" "}
            <p className="py-3">
              Lorem Ipsum is simply dummy text they <br /> are printing typesetting has
              been the industry’s stardard.
            </p>
            <div className="">
                {" "}
                <button className=" btn-outline border-none   text-blue-400">
                  Learn More -
                </button>
              </div>{" "}
          </div>
        </div>
        <div>
          <img src={hw} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Togethers;
