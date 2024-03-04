import idea from "../../../assets/All-images/idea.png";
import { Link } from 'react-router-dom';

const Collaborate = () => {
  return (
    <div className="p-24">
      <div className="flex flex-col items-center">
        <img src={idea} alt="" />
        <h1 className="text-4xl font-bold text-center">
          Collaborate without <br /> constraints
        </h1>
      </div>
      <div className="flex flex-col items-center pt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
          <div>
            <h1 className="font-bold text-2xl p-3">Free forever</h1>
            <p className="p-3">
              Our free plan gives you unlimited team members, 3 boards, and
              300+ expert-made templates. Signing up with your work email lets
              you bring in your team faster. See our{" "}
              <span className="text-blue-500">pricing plans</span> for more
              features.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl p-3">Easy integrations</h1>
            <p className="p-3">
              Miro has 100+ powerful integrations with tools you already use
              like G Suite, Slack, and Jira, so your workflow is seamless. View
              the full list in our <span className="text-blue-500">Marketplace</span>.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl p-3">Security first</h1>{" "}
            <p className="p-3">
              We treat your data like you would — with the utmost care. We
              follow industry-leading security standards and give you tools to
              protect intellectual property. Learn more at our{" "}
              <span className="text-blue-500">Trust Center</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-3">
        <Link to="/">
          <button className="rounded-lg px-4 py-2 text-lg md:px-8 md:text-xl bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
            Sign up free →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Collaborate;
