import okta from "../../../assets/All-images/okta.png";
import volvo from "../../../assets/All-images/volvo.png";
import deloitte from "../../../assets/All-images/deloitte.png";
import walmart from "../../../assets/All-images/walmart.png";
import cisco from "../../../assets/All-images/cisco.png";

const Users = () => {
  return (
    <div className="px-24">
        <p className="text-center text-gray-400 ">Trusted by 45M+ users</p>
      <div className="flex justify-center pt-3">
        <div className="grid grid-cols-5 gap-4 py-5">
        <div className="image-container"><img src={walmart} alt=""  /></div>
          <div className="image-container"><img src={cisco} alt=""  /></div>
          <div className="image-container"><img src={volvo} alt=""  /></div>
          <div className="image-container"><img src={deloitte} alt=""  /></div>
          <div className="image-container"><img src={okta} alt=""  /></div>
        </div>
      </div>
    </div>
  );
};

export default Users;
