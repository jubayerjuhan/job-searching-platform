import PropTypes from "prop-types"; // Import PropTypes

const Loading = ({ loading }) => {
  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="spinner"></div>
      </div>
    );
  } else {
    return null;
  }
};

// Add prop type validation
Loading.propTypes = {
  loading: PropTypes.bool.isRequired, // Prop should be a boolean and is required
};

export default Loading;
