import bb from "../../../assets/All-images/bb.png";
const BuiltWork = () => {
  return (
    <div className="px-4 md:px-8 lg:px-24">
      <h1 className="text-4xl font-bold">Built for the way you work</h1>
  
      <div className="p-5"><span className="btn border-2 bg-slate-300 rounded-full p-4">Brainstorming</span> <span className="btn border-2 rounded-full p-4 m-2">Diagramming</span> <span className="btn border-2 rounded-full m-2 p-4">Meetings & Workshops</span> <span className="btn border-2 rounded-full p-4 m-2">Scrum Events</span> <span className="btn border-2 rounded-full m-2 p-4">Mapping</span> <span className="btn border-2 rounded-full p-4 m-2">Research & Design</span> <span className="btn border-2 rounded-full p-4 m-2">Strategic Planning</span> </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 my-5">
        <div className="my-24">
          <h1 className="text-2xl font-semibold">Brainstorming</h1>
          <p className="py-3">
            Unleash creative ideas and build on them with the help <br /> of
            sticky notes, images, mind maps, videos, drawing capabilities — the{" "}
            <br /> list goes on.
          </p>
          <div className="">
            <button className="btn-outline border-none text-blue-400 hover:bg-slate-500 p-2">
              Learn More →
            </button>
          </div>
        </div>

        <div className="text-center">
          <img src={bb} alt="" className="max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default BuiltWork;
