import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getCurrentItems } from "../../utility/localStorage";
import Estate from "../../components/Estate/Estate";
import SectionHeading from "./../shared/SectionHeading/SectionHeading";
import { scrollToTop } from "./../../utility/scrollToTop";
import { Helmet } from "react-helmet-async";
import SavedProperty from "../../components/SavedProperty/SavedProperty";

const SavedProperties = () => {
  const estates = useLoaderData();
  const [savedEstates, setSavedProperties] = useState([]);
  const [loadState, setLoadState] = useState(true);

  useEffect(() => {
    const estatesIds = getCurrentItems();
    const arr = [];
    estatesIds.map((idp) => {
      estates.map((estate) => {
        if (estate.id === idp) {
          arr.push(estate);
        }
      });
    });
    setSavedProperties(arr);
    setLoadState(false);
  }, [estates]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <section className="container mx-auto px-4 py-12 ">
      <Helmet>
        <title>Green Villa | Saved Properties</title>
      </Helmet>
      {loadState ? (
        <div className="h-[80vh] flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>

        </div>
      ) : (
        <>
          {savedEstates.length ? (
            <>
              <SectionHeading 
                sectionTitle={`Your saved ${savedEstates.length > 1 ? 'properties': 'property'}`
            }
            sectionDescription="Now in this page you can see the properties you have saved"
              />
              <div className="grid grid-cols-1 gap-6">
                {savedEstates.map((estate) => (
                  <SavedProperty key={estate.id} estate={estate} />
                ))}
              </div>
            </>
          ) : (
            <div className="h-[80vh] flex justify-center items-center">
              <h2 className="text-gray-400 font-semibold text-3xl">
                You haven't saved any property yet!
              </h2>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default SavedProperties;
