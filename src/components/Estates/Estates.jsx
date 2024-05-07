import Estate from "./../Estate/Estate";
import SectionHeading from "./../../pages/shared/SectionHeading/SectionHeading";
import useGetData from "./../../customHook/useGetData";

const sectionDescription = `Step into the realm of luxury and comfort with our Estates section, where each house card is a gateway to your ideal living space. `;
const Estates = () => {
  const [estates, err, loading] = useGetData("/estates");
  
  return (
    <section id="estates" className="container mx-auto px-4 py-12">
      <SectionHeading
        sectionTitle="Explore Our Estates: Unveiling Your Dream Home"
        sectionDescription={sectionDescription}
      />
      {loading ? (
        <div className="text-center py-12">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {estates.map((estate) => (
            <Estate key={estate._id} estate={estate} />
          ))}
        </div>
      )}
      <div className="py-12 flex justify-center">
        <h2 className="text-3xl font-bold  text-gray-300">{err}</h2>
      </div>
    </section>
  );
};

export default Estates;
