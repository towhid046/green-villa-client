import { useContext } from "react";
import { UserContext } from "../../providers/ContextProvider/ContextProvider";
import useGetData from "../../customHook/useGetData";
import MyEstate from "./../../components/MyEstate/MyEstate";

const MyEstates = () => {
  const { user } = useContext(UserContext);
  const [estates, err, loading] = useGetData(
    `/user-estates?email=${user?.email}`
  );

  return (
    <section className="min-h-screen container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold py-12 text-center">
        All Of my Added Estates: {estates.length}
      </h2>
      {loading ? (
        <div className="flex justify-center py-12">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Action</th>
                <th>Email</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {estates.map((estate) => (
                <MyEstate key={estate._id} estate={estate} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default MyEstates;
