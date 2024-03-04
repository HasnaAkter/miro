import React from "react";
import hw from "../../../assets/All-images/hybridwork.png.png";

const Togethers = () => {
  return (
    <div className="px-4 md:px-8 lg:px-24">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 my-5">
        <div>
          <div className="my-24">
            <h1 className="text-2xl md:text-4xl font-bold">
              Work together, <br /> wherever you work
            </h1>{" "}
            <p className="py-3">
              In the office, remote, or a mix of the two, with Miro, <br /> your
              team can connect, collaborate, and co-create in <br /> one space
              no matter where you are.
            </p>
            <div className="">
              {" "}
              <button className="btn-outline border-none text-blue-400 hover:bg-slate-500 p-2">
                Learn More →
              </button>
            </div>{" "}
          </div>
        </div>
        <div className="text-center">
          <img src={hw} alt="" className="max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default Togethers;
