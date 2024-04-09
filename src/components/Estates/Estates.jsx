import { useContext } from "react";
import Estate from "./../Estate/Estate";
import { UserContext } from "./../../providers/ContextProvider/ContextProvider";

const Estates = () => {
  const { estates } = useContext(UserContext);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center py-6">
        Estates:{estates.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {estates &&
          estates.map((estate) => <Estate key={estate.id} estate={estate} />)}
      </div>
    </div>
  );
};

export default Estates;
