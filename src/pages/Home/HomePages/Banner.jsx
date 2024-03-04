import tableBanner from "../../../assets/All-images/headerimage-without-text.png.png";
import sico from "../../../assets/All-images/div.png";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-10 lg:p-24">
      
      <div className="col-span-1 md:col-span-1">
        <div className="p-4 md:p-8 lg:p-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">Take ideas from <br /> better to best</h2>
          <p className="text-gray-600">Miro is your team's visual platform to connect, <br /> collaborate, and create — together.</p>
          <input type="text" placeholder="Enter your work email" className="input input-bordered input-primary w-full max-w-xs md:max-w-full rounded-full mt-4 md:mt-6" />
          <div className='pt-2'>
            <Link to="/login">
              <button className="rounded-full px-4 py-2 text-lg md:text-xl bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
                Sign up free →
              </button>
            </Link>
          </div>
          <p className="text-gray-600 mt-2">Collaborate with your team within minutes</p>
          <Link to="">
            <img src={sico} alt="Icon" className="w-full h-16 mt-4 md:mt-6" />
          </Link>
        </div>
      </div>

      <div className="col-span-1 md:col-span-1">
        <Link to="/page1">
          <img src={tableBanner} alt="Table Banner" className="w-full h-auto" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
