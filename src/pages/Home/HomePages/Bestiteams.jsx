import { Link } from "react-router-dom";
import dg from "../../../assets/All-images/dg.png";
import janes from "../../../assets/All-images/Janes.png";
import jo from "../../../assets/All-images/motu.png";

const Bestiteams = () => {
  return (
    <div className="p-4 md:p-10 lg:p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Loved by the world's best teams
        </h1>
        <div className="flex justify-center py-5">
          <Link to="/">
            <button className="rounded-full border-2 px-4 py-3 text-lg md:px-8 md:text-xl bg-white text-blue-500 hover:bg-gray-300 duration-300">
              See all customer stories →
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center pt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
          <div className="bg-white rounded-lg overflow-hidden">
            <h1 className="font-bold text-xl md:text-2xl lg:text-4xl p-3">
              vm
              <span className="font-normal text-xl md:text-2xl lg:text-4xl">
                ware
              </span>
            </h1>
            <p className="p-3 text-gray-400">
              “When the pandemic hit, those of us who thrive on in-person
              collaboration were worried that our creativity and productivity
              would suffer. Miro was the perfect tool to help us with
              collaboration, whiteboarding, and retrospectives while remote.”
            </p>
            <div className="card card-side">
              <figure>
                <img src={janes} alt="" className="w-full h-auto" />
              </figure>
              <div className="card-body">
                <p className="text-gray-400">Roxanne Mustafa</p>
                <p className="text-gray-400">Design Team Lead at VMware</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <h1 className="font-bold text-xl md:text-2xl lg:text-4xl p-3">
              DocuSign
            </h1>
            <p className="p-3 text-gray-400">
              “Miro helps solve one of the major gaps in product design: how
              to manage tasks across product designers whose projects are in
              different tools.”
            </p>
            <div className="card card-side">
              <figure>
                <img src={dg} alt="" className="w-full h-auto" />
              </figure>
              <div className="card-body">
                <p className="text-gray-400">Jane Ashley</p>
                <p className="text-gray-400">Head of Design at DocuSign</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <h1 className="font-bold text-xl md:text-2xl lg:text-4xl p-3">
              Frog
            </h1>{" "}
            <p className="p-3 text-gray-400">
              “As we used Miro we moved from skepticism to belief to
              innovation, and now we have a tool that’s at the core of what we
              do and will continue to extend into the future.”
            </p>
            <div className="card card-side">
              <figure>
                <img src={jo} alt="" className="w-full h-auto" />
              </figure>
              <div className="card-body">
                <p className="text-gray-400">Laura Baird</p>
                <p className="text-gray-400">
                  Associate Design Director at frog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestiteams;
