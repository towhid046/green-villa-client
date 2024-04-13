import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { UserContext } from "../../providers/ContextProvider/ContextProvider";
import { scrollToTop } from './../../utility/scrollToTop';
const UserProfile = () => {
  const { loading, user } = useContext(UserContext);

  useEffect(()=>{
    scrollToTop()
  },[])



  return (
    <section 
    data-aos-duration="1000"
    data-aos="fade-right"
    data-aos-delay="200"
    data-aos-easing="ease-in-out"
    className="container mx-auto px-4">
      <Helmet>
        <title>Green Villa | User Profile</title>
      </Helmet>
      <div className="max-w-xl mx-auto p-12">
        {loading ? (
          <span className="loading loading-dots loading-lg"></span>
        ) : (
          <>
            <div className="flex flex-col items-center gap-3 ">
            <h2 className="text-2xl font-bold mb-10 border-b pb-7 w-full text-center ">
              Your profile information
            </h2>
              <img
                src={user?.photoURL}
                className="rounded-full h-28 w-28"
                alt="User Profile image"
              />
              <h2 className="text-lg font-bold">Name: {user?.displayName}</h2>
              <p>Email: {user?.email}</p>
              <label className="text-center">Photo Url: <br /> <input
                  name="password"
                  type="text"
                  value={user?.photoURL}
                  className="focus:outline-none w-full input rounded-lg outline-none bg-[#f3f3f3]"
                  required
                /></label>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default UserProfile;
