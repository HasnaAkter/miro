import React from "react";
import connect from "../../../assets/All-images/M3_integrations_all_integrations.png.png";

const Connect = () => {
  return (
    <div className="px-4 md:px-8 lg:px-24">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 my-5">
        <div className="text-center md:text-left">
          <img src={connect} alt="Connect" className="max-w-full" />
        </div>
        <div>
          <div className="my-24">
            <h1 className="text-2xl md:text-4xl font-bold">
              Connect <br />
              your tools, <br />
              close your tabs
            </h1>{" "}
            <p className="py-3">
              Whether you want to edit your Google Docs, resolve <br /> Jira
              issues, or collaborate over Zoom, Miro has 100+ <br /> integrations
              with tools you already use and love.
            </p>
            <div className="">
              {" "}
              <button className="btn-outline border-none text-blue-400 hover:bg-slate-500 p-2">
                Learn More →
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
