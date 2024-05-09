import { useEffect, useState } from "react";
import { getCurrentItems } from "../../utility/localStorage";
import SectionHeading from "./../shared/SectionHeading/SectionHeading";
import Cart from "./../../components/Cart/Cart";

const MyCart = () => {
  const savedItems = getCurrentItems();
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/estateIds`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(savedItems),
    })
      .then((res) => res.json())
      .then((data) => {
        setEstates(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="container mx-auto px-4 min-h-screen py-12">
      <SectionHeading
        sectionTitle={`Your car have : ${estates.length} estates`}
        sectionDescription="Phosfluorescently strategize intuitive interfaces without leveraged channels. Assertively iterate client-based innovation without end-to-end alignments. Objectively pontificate equity invested collaboration and idea-sharing vis-a-vis."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {estates?.map((estate) => (
          <Cart key={estate._id} estate={estate} />
        ))}
      </div>
    </section>
  );
};

export default MyCart;
