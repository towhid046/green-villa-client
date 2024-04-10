import { useEffect, useState } from "react";
import SectionHeading from "./../../pages/shared/SectionHeading/SectionHeading";
import Photo from "./../Photo/Photo";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("estates.json");
      const data = await res.json();
      setPhotos(data);
    };
    loadData();
  }, []);

  const sectionDescription = `Take a virtual stroll through our photo gallery and immerse yourself in the beauty of our properties. Each image captures the essence of home, showcasing elegant interiors, lush landscapes, and captivating architecture.`;

  return (
    <section className="container mx-auto px-4 py-12">
      <SectionHeading
        sectionTitle="Photo Gallery"
        sectionDescription={sectionDescription}
      />
      <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 ">
        {photos &&
          photos
            .slice(0, 6).reverse()
            .map((photo) => <Photo key={photo.id} photo={photo} />)}
      </div>
    </section>
  );
};

export default PhotoGallery;
