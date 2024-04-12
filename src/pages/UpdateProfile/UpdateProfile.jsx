import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/ContextProvider/ContextProvider";
import { scrollToTop } from "./../../utility/scrollToTop";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateUserProfile, setLoading, loading } =
    useContext(UserContext);

  const [userName, setUserName] = useState(user?.displayName);
  const [photoUrl, setPhotoUrl] = useState(user?.photoURL);

  useEffect(() => {
    scrollToTop();
  }, []);

  const handelUpdateUserProfile = (e) => {
    e.preventDefault();
    updateUserProfile(userName, photoUrl)
      .then((result) => {
        setLoading(false);
        toast.success("Your information is updated");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="py-16 container mx-auto px-4">
      <Helmet>
        <title>Green Villa | Update Profile</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row justify-between gap-8  border rounded-xl items-start">
        <div className="w-full lg:w-1/2 rounded-xl bg-base-100  lg:h-full mx-auto md:p-12 py-8 px-6">
          {user ? (
            <>
              <h1 className="text-2xl font-bold text-center mb-8">
                Update your Profile
              </h1>
              <hr />
              <form onSubmit={handelUpdateUserProfile} className="mt-5">
                <div>
                  <label className="label">
                    <strong className="label-text">Your Name</strong>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Update your name"
                    className="focus:outline-none input w-full rounded-lg outline-none bg-[#f3f3f3]"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <strong className="label-text">Photo URL</strong>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    placeholder="Update your photo url"
                    className="focus:outline-none input w-full rounded-lg outline-none bg-[#f3f3f3]"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <strong className="label-text">Your Email</strong>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user?.email}
                    placeholder="Enter your email"
                    className="focus:outline-none input w-full rounded-lg outline-none bg-[#f3f3f3]"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn w-full rounded-lg hover:bg-black text-white bg-[#2B3440]">
                    Update
                  </button>
                </div>
              </form>
            </>
          ) : (
            <span className="loading loading-dots loading-lg"></span>
          )}
        </div>

        <div className="lg:h-full w-full lg:w-1/2 flex  items-center flex-col gap-3 p-12">
          {loading ? (
            <span className="loading loading-dots loading-lg"></span>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-14 border-b pb-7 w-full text-center">
                Your profile information
              </h2>
              <img
                src={user?.photoURL}
                className="rounded-full h-28 w-28"
                alt="User Profile image"
              />
              <h2 className="text-lg font-bold">Name: {user?.displayName}</h2>
              <p>Email: {user?.email}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpdateProfile;
