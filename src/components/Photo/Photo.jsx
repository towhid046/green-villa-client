import PropTypes from "prop-types";
const Photo = ({ photo }) => {
  const { image, id } = photo;
  const animClass = ["fade-right",'fade-right', 'zoom-in-up', 'fade-left', 'fade-right', 'zoom-in-down', 'fade-left'];
  return (
    <div
    data-aos-duration="1000"
    data-aos-delay="400"
    data-aos-easing="ease-in-out"
    data-aos={animClass[id]}
    className="overflow-hidden rounded">
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
