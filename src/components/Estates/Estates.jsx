import Estate from "./../Estate/Estate";
import SectionHeading from "./../../pages/shared/SectionHeading/SectionHeading";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const sectionDescription = `Step into the realm of luxury and comfort with our Estates section, where each house card is a gateway to your ideal living space. `;
const Estates = () => {
  const [estates, setEstates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_URL}/estates`);
        const data = await res.json();
        setEstates(data);
      } catch (error) {
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    <div className="text-center py-12">
      <span className="loading loading-dots loading-lg"></span>
    </div>;
  }
  if (err) {
    return (
      <div className="py-12 flex justify-center">
        <h2 className="text-3xl font-bold  text-gray-300">{err}</h2>
      </div>
    );
  }

  return (
    <section id="estates" className="container mx-auto px-4 py-12">
      <SectionHeading
        sectionTitle="Explore Our Estates: Unveiling Your Dream Home"
        sectionDescription={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {estates?.slice(0, 6).map((estate) => (
          <Estate key={estate._id} estate={estate} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to={'/all-estates'}>
          <button className="btn rounded-full flex items-center gap-4 btn-wide btn-outline">
            See more
            <FaArrowRightLong className="text-lg" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Estates;
