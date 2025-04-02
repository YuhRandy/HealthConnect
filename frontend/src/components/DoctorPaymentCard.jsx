import PropTypes from "prop-types";

const DoctorPaymentCard = ({ doctor }) => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
        <div className="flex flex-col items-center mb-6">
          <img
            src={`/images/${doctor.image}`}
            alt={doctor.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">
            {doctor.name}
          </h2>
          <p className="text-blue-600 italic">{doctor.speciality}</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Consultation Fee:</span>
            <span className="text-gray-900 font-semibold">
              {doctor.payPerConsultation}XAF
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Rating:</span>
            <span className="text-gray-900">{doctor.ratings}/5</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Consultations:</span>
            <span className="text-gray-900">{doctor.consultations}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Appointment Details
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Date & Time:</span>
              <span className="text-gray-900 font-medium">
                {doctor.nextAvailable}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration:</span>
              <span className="text-gray-900">{doctor.duration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Consultation Type:</span>
              <span className="text-gray-900">{doctor.appointmentType}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DoctorPaymentCard.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    speciality: PropTypes.string.isRequired,
    payPerConsultation: PropTypes.number.isRequired,
    ratings: PropTypes.number.isRequired,
    consultations: PropTypes.number.isRequired,
    nextAvailable: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    appointmentType: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoctorPaymentCard;
