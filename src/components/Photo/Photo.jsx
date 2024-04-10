import PropTypes from "prop-types";
const Photo = ({ photo }) => {
  const { image, id } = photo;
  return (
    <>
      <img
        className="rounded cursor-pointer lg:hover:scale-125 transition duration-50 ease-in-out"
        src={image}
        alt="Image"
      />
    </>
  );
};
Photo.propTypes = {
  photo: PropTypes.object.isRequired,
};
export default Photo;
