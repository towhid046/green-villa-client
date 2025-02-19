import PropTypes from 'prop-types'
const SectionHeading = ({ sectionTitle = 'Section Title' , sectionDescription = 'Section Description' }) => {

  return (
    <header 
    data-aos-duration="1000"
    data-aos-delay="200"
    data-aos-easing="ease-in-out"
    data-aos='fade-right'

    className="text-center py-7 max-w-2xl space-y-3 mx-auto">
      <h2 className="md:text-4xl text-3xl font-bold">{sectionTitle}</h2>
      <p className="text-gray-600">{sectionDescription}</p>
    </header>
  );
};

SectionHeading.propTypes = {
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
}

export default SectionHeading;
