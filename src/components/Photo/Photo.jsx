import PropTypes from "prop-types";
const Photo = ({ photo }) => {
  const { image, id } = photo;
  return (
    <div className="overflow-hidden rounded">
      <img
        className=" rounded cursor-pointer   hover:scale-125 transition duration-50 ease-in-out"
        src={image}
        alt="Image"
      />
    </div>
  );
};
Photo.propTypes = {
  photo: PropTypes.object.isRequired,
};
export default Photo;
