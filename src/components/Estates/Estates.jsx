import Estate from "./../Estate/Estate";
import SectionHeading from "./../../pages/shared/SectionHeading/SectionHeading";
import { useLoaderData } from "react-router-dom";

const Estates = () => {
  const estates = useLoaderData();
  const sectionDescription = `Step into the realm of luxury and comfort with our Estates section, where each house card is a gateway to your ideal living space. `;

  return (
    <section id="estates" className="container mx-auto px-4 py-12">
      <SectionHeading
        sectionTitle="Explore Our Estates: Unveiling Your Dream Home"
        sectionDescription={sectionDescription}
      />
      {estates.length ? (
        <div  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {estates &&
            estates.map((estate) => <Estate key={estate.id} estate={estate} />)}
        </div>
      ) : (
        <div className="text-center py-12">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </section>
  );
};

export default Estates;
