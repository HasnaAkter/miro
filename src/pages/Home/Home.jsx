
import Banner from "./HomePages/Banner";
import Bestiteams from "./HomePages/Bestiteams";
import BuildTeam from "./HomePages/BuildTeam";
import BuiltWork from "./HomePages/BuiltWork";
import Collaborate from "./HomePages/Collaborate";
import Connect from "./HomePages/Connect ";
import Overllybanner from "./HomePages/OverllyBanner";
import Togethers from "./HomePages/Togethers";
import Users from "./HomePages/Users";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Users></Users>
      <Collaborate></Collaborate>
      <Togethers></Togethers>
      <Connect></Connect>
      <Overllybanner></Overllybanner>
      <BuiltWork></BuiltWork>
      <BuildTeam></BuildTeam>
      <Bestiteams></Bestiteams>
    
    </div>
  );
};

export default Home;
