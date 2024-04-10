import { useContext } from "react";
import Estate from "./../Estate/Estate";
import { UserContext } from "./../../providers/ContextProvider/ContextProvider";
import SectionHeading from './../../pages/shared/SectionHeading/SectionHeading';


const Estates = () => {
  const { estates } = useContext(UserContext);
const sectionDescription = `Step into the realm of luxury and comfort with our Estates section, where each house card is a gateway to your ideal living space. `

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
      sectionTitle = 'Explore Our Estates: Unveiling Your Dream Home'
      sectionDescription={sectionDescription}
      />
      {estates.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {estates &&
            estates.map((estate) => <Estate key={estate.id} estate={estate} />)}
        </div>
      ) : (
        <div className="text-center py-12">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default Estates;
