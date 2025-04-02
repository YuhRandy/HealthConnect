import { Link } from "react-router-dom";

import PropTypes from "prop-types"; // Import PropTypes

const DoctorCard = ({ doctor }) => {
  // const navigate = useNavigate();

  // const handleMessageClick = () => {
  //   navigate(`/payment`); // Navigate to the chat page with the doctor's ID
  // };

  return (
    <div className="doctor-card">
      <img
        // src={"../../images/Awa.jpg"}
        src={doctor.image}
        alt={doctor.name}
        className="doctor-image object-center"
      />
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
        Consultation Fee: <strong>{doctor.payPerConsultation} XAF</strong>
      </p>
      <Link to={`/payment/${doctor.id}`} className="...">
        <button className="my-3 bg-blue-500 p-2 rounded text-white">
          Consult Now
        </button>{" "}
      </Link>
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
