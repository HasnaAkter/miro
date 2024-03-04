import uxb from "../../../assets/All-images/uxb.png";
import icon from "../../../assets/All-images/allicon.png";

const BuildTeam = () => {
  return (
    <div className="px-4 md:px-8 lg:px-24">
      <h1 className="text-4xl font-bold">Built for all kinds of teams</h1>

      <div className="p-5">
        <span className="btn border-2 bg-slate-300 rounded-full p-4">
          UX & Design
        </span>{" "}
        <span className="btn border-2 rounded-full p-4 m-2">Marketing</span>{" "}
        <span className="btn border-2 rounded-full m-2 p-4">
          Product Management
        </span>{" "}
        <span className="btn border-2 rounded-full p-4 m-2">Engineering</span>{" "}
        <span className="btn border-2 rounded-full m-2 p-4">Consultants</span>{" "}
        <span className="btn border-2 rounded-full p-4 m-2">Agile Coaches</span>{" "}
        <span className="btn border-2 rounded-full p-4 m-2">Sales</span>{" "}
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 my-5">
        <div className="my-24">
          <p className="py-3 text-gray-500">
            <span className="font-bold p-5">✓</span> Build low-fi wireframes
          </p>
          <p className="py-3 text-gray-500">
            <span className="font-bold p-5">✓</span> Involve stakeholders in the
            design process
          </p>
          <p className="py-3 text-gray-500">
            <span className="font-bold p-5">✓</span> Run engaging design
            workshops
          </p>
          <div className="p-5">
            <button className="btn-outline border-none text-blue-400 hover:bg-slate-500 p-2">
              Learn More →
            </button>
          </div>
          <p className="p-5 text-gray-500">Integrate your favorite tools</p>
          <div className="p-5">
            <img src={icon} alt="" />
          </div>
        </div>

        <div className="text-center">
          <img src={uxb} alt="" className="max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default BuildTeam;
