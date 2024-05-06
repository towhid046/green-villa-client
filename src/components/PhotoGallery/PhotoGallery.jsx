import SectionHeading from "./../../pages/shared/SectionHeading/SectionHeading";
import Photo from "./../Photo/Photo";
import useGetData from "../../customHook/useGetData";

const PhotoGallery = () => {
  const [photos, err, loading] = useGetData("/estates");

  const sectionDescription = `Take a virtual stroll through our photo gallery and immerse yourself in the beauty of our properties. Each image captures the essence of home, showcasing elegant interiors, lush landscapes, and captivating architecture.`;

  return (
    <section className="container mx-auto px-4 py-12">
      <SectionHeading
        sectionTitle="Photo Gallery"
        sectionDescription={sectionDescription}
      />

      {loading ? (
        <div className="text-center py-12">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1  ">
          {photos &&
            photos
              .slice(0, 6)
              .reverse()
              .map((photo) => <Photo key={photo.id} photo={photo} />)}
        </div>
      )}
      <div className="py-12 flex justify-center">
        <h2 className="text-3xl font-bold  text-gray-300">{err}</h2>
      </div>
    </section>
  );
};

export default PhotoGallery;
