import { Link } from "react-router-dom";
import googleLogo from "../../../src/assets/logos/google-logo.png";
import githubLogo from "../../../src/assets/logos/github-logo.png";
const Login = () => {
  return (
    <div>
      <div className="hero md:min-h-screen container-fluid pt-12 pb-8">
        <div className="w-full px-4">
          <div className="max-w-xl border bg-base-100 mx-auto md:p-12 py-8 px-6">
            <h1 className="text-2xl font-bold text-center mb-8">
              Login your account
            </h1>
            <hr />
            <form className="mt-5">
              <div>
                <label className="label">
                  <strong className="label-text">Email address</strong>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control my-5">
                <button className="btn w-full rounded-none hover:bg-black text-white bg-[#403f3f]">
                  Log in
                </button>
              </div>
            </form>
            <div>
              <div className="text-center mb-4">
                <h2 className="text-2xl">Or</h2>
                <p>Log In with</p>
              </div>
              <div className="flex justify-center gap-5">
                <button
                  // onClick={handelLogInWithGoogle}
                  className="btn flex items-center gap-2"
                >
                  <img className="w-8" src={googleLogo} alt="Google" />
                  <span> Google</span>
                </button>
                <button
                  // onClick={handelLogInWithGithub}
                  className="btn flex items-center gap-2"
                >
                  <img className="w-8" src={githubLogo} alt="Github" />
                  <span>GitHub</span>
                </button>
              </div>
            </div>
            <p className="text-center mt-5">
              Don't have an account?{" "}
              <Link
                to={"/register"}
                className=" cursor-pointer text-red-400 font-semibold"
              >
                Regester
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
