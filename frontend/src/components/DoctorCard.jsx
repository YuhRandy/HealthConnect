import PropTypes from "prop-types"; // Import PropTypes

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      <strong>
        <h3>{doctor.name}</h3>
      </strong>
      <p>
        Speciality: <strong>{doctor.speciality}</strong>
      </p>
      <p>
        Ratings: <strong>{doctor.ratings} ⭐</strong>
      </p>
      <p>
        Consultations: <strong>{doctor.consultations}</strong>
      </p>
      <p>
        Pay/Consultation: <strong>{doctor.payPerConsultation} XAF</strong>
      </p>
    </div>
  );
};

// Add PropTypes validation
DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    speciality: PropTypes.string.isRequired,
    ratings: PropTypes.number.isRequired,
    consultations: PropTypes.number.isRequired,
    payPerConsultation: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoctorCard;
