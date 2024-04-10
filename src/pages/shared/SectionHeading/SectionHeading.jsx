import PropTypes from 'prop-types'
const SectionHeading = ({ sectionTitle = 'Section Title' , sectionDescription = 'Section Description' }) => {
  return (
    <header className="text-center py-7 max-w-2xl mx-auto space-y-3">
      <h2 className="md:text-4xl text-3xl font-bold">{sectionTitle}</h2>
      <p className="text-gray-600">{sectionDescription}</p>
    </header>
  );
};


SectionHeading.propTypes = {
    sectionTitle: PropTypes.string.isRequired,
    sectionDescription: PropTypes.string.isRequired,
}

export default SectionHeading;
