import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import doctorsData from "../data/doctorsdata.json";
import DoctorPaymentCard from "../components/DoctorPaymentCard";
import PaymentForm from "../components/PaymentForm";

const PaymentPage = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const selectedDoctor = doctorsData.find(
        (doc) => doc.id.toString() === doctorId
      );

      if (!selectedDoctor) {
        throw new Error("Doctor not found");
      }

      const doctorWithAppointment = {
        ...selectedDoctor,
        appointmentType: "Video Call",
        duration: "30 minutes",
      };

      setDoctor(doctorWithAppointment);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, [doctorId]);

  const handlePaymentSubmit = (paymentData) => {
    console.log("Payment submitted:", paymentData);
    alert("Payment processed successfully!");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading doctor information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Error</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <a
            href="/doctors"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Back to Doctors List
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold md:font-bold text-center text-gray-900 mb-8">
          Complete Your Payment
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <DoctorPaymentCard doctor={doctor} />
          <PaymentForm doctor={doctor} onSubmit={handlePaymentSubmit} />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
