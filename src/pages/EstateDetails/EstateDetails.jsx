import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { scrollToTop } from "../../utility/scrollToTop";
const EstateDetails = () => {
  const { estateId } = useParams();

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <h3 className="text-3xl text-center py-40 font-bold">
        Estate details: {estateId}
      </h3>
    </div>
  );
};

export default EstateDetails;
