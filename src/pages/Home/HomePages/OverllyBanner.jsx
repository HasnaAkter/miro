import bgimg from "../../../assets/All-images/baNNER.png";
import { Link } from 'react-router-dom';

const Overllybanner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="p-4 sm:p-8 md:p-16 lg:p-24">
      <div className="mx-auto p-8 sm:p-12 md:p-24 lg:p-64 rounded-lg" style={bannerStyle}>
        <div className="text-end">
          <p className="font-bold text-4xl text-black">The Ways We Work</p>
          <p className="text-black">How has our relationship with work changed?</p>
          <Link to="/">
            <button className="rounded-full px-4 py-2 text-lg md:px-8 md:text-xl bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
              View the report →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overllybanner;
