import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Green Villa | Register</title>
      </Helmet>
      <div className="hero md:min-h-screen container-fluid pt-12 pb-8">
        <div className="w-full px-4">
          <div className="max-w-xl bg-base-100 border mx-auto md:p-12 py-8 px-6">
            <h1 className="text-2xl font-bold text-center mb-8">
              Register your account
            </h1>
            <hr />
            <form className="mt-5">
              <div>
                <label className="label">
                  <strong className="label-text">Your Name</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <strong className="label-text">Photo URL</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter your photo url"
                  className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <strong className="label-text">Email</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <strong className="label-text">Password</strong>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="focus:outline-none w-full input rounded-none outline-none bg-[#f3f3f3]"
                  required
                />
              </div>
              <div className="flex items-center gap-1 mt-6">
                <input
                  type="checkbox"
                  id="terms-contition"
                  className="checkbox checkbox-sm rounded"
                />
                <label htmlFor="terms-contition" className="cursor-pointer">
                  <span>Accept Term & Conditions</span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn w-full rounded-none hover:bg-black text-white bg-[#403f3f]">
                  Register
                </button>
              </div>
            </form>
            <p className="text-center mt-5">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className=" cursor-pointer text-red-400 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
