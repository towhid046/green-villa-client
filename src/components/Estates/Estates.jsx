import Estate from "./../Estate/Estate";
import SectionHeading from "./../../pages/shared/SectionHeading/SectionHeading";
import useGetData from "./../../customHook/useGetData";
import { useEffect, useState } from "react";

const sectionDescription = `Step into the realm of luxury and comfort with our Estates section, where each house card is a gateway to your ideal living space. `;
const Estates = () => {
  const [estates, setEstates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const [count, setCount] = useState(0);
  const [estatePerPage, setEstatePerPage] = useState(6);
  const totalPages = Math.ceil(count / estatePerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [...Array(totalPages).keys()];

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(`${import.meta.env.VITE_URL}/estates-count`);
      const data = await res.json();
      setCount(data.count);
    };
    loadData();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_URL
          }/estates?page=${currentPage}&size=${estatePerPage}`
        );
        const data = await res.json();
        setEstates(data);
      } catch (error) {
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [currentPage, estatePerPage]);

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const handleChangeEstatePerPage = (e) => {
    const value = Number(e.target.value);
    setEstatePerPage(value);
    setCurrentPage(0);
  };

  const handlePrevButton = () => {
    if(currentPage > 0){
      setCurrentPage(currentPage - 1)
    }
  };

  const handleNextButton = () => {
    if(currentPage < pages.length -1){
      setCurrentPage(currentPage + 1)
    }
  };
  const pagination = pages?.map((page) => (
    <li
      key={page}
      className={`join-item btn btn-square ${
        page === currentPage ? "bgGreen" : ""
      } `}
      onClick={() => handleCurrentPage(page)}
      type="radio"
      name="options"
    >
      {page}
    </li>
  ));

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
          {estates?.map((estate) => (
            <Estate key={estate._id} estate={estate} />
          ))}
        </div>
      )}
      <div className="py-12 flex justify-center">
        <h2 className="text-3xl font-bold  text-gray-300">{err}</h2>
      </div>

      <div className="flex justify-center gap-5">
        <button onClick={handlePrevButton} className="btn btn-primary">
          Prev
        </button>
        <div className="join">{pagination}</div>
        <button onClick={handleNextButton} className="btn btn-primary">
          Next
        </button>

        <select
          onChange={handleChangeEstatePerPage}
          className="select select-primary"
        >
          <option value={6}>6</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
    </section>
  );
};

export default Estates;
