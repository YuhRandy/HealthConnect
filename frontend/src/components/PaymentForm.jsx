import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ doctor, onSubmit }) => {
  const navigate = useNavigate(); // Add this hook

  const [paymentDetails, setPaymentDetails] = useState({
    fullName: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    agreeTerms: false,
  });

  const [formErrors, setFormErrors] = useState({});
  //   const [isSubmitted, setIsSubmitted] = useState(false);

  const validationPatterns = {
    fullName: /^[a-zA-Z\s]{3,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    cardNumber: /^\d{16}$/,
    expiryDate: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
    cvv: /^\d{3,4}$/,
  };

  const errorMessages = {
    fullName: "Please enter a valid full name (min 3 characters)",
    email: "Please enter a valid email address",
    cardNumber: "Please enter a valid 16-digit card number",
    expiryDate: "Please enter a valid expiry date (MM/YY)",
    cvv: "Please enter a valid CVV (3-4 digits)",
    agreeTerms: "You must agree to the terms",
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!validationPatterns.fullName.test(paymentDetails.fullName.trim())) {
      errors.fullName = errorMessages.fullName;
      isValid = false;
    }

    if (!validationPatterns.email.test(paymentDetails.email)) {
      errors.email = errorMessages.email;
      isValid = false;
    }

    const cardNumber = paymentDetails.cardNumber.replace(/\s/g, "");
    if (!validationPatterns.cardNumber.test(cardNumber)) {
      errors.cardNumber = errorMessages.cardNumber;
      isValid = false;
    }

    if (!validationPatterns.expiryDate.test(paymentDetails.expiryDate)) {
      errors.expiryDate = errorMessages.expiryDate;
      isValid = false;
    }

    if (!validationPatterns.cvv.test(paymentDetails.cvv)) {
      errors.cvv = errorMessages.cvv;
      isValid = false;
    }

    if (!paymentDetails.agreeTerms) {
      errors.agreeTerms = errorMessages.agreeTerms;
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    }
    return value;
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/[^0-9]/g, "");
    if (v.length >= 3) {
      return `${v.substring(0, 2)}/${v.substring(2)}`;
    }
    return value;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    let processedValue = value;

    if (name === "cardNumber") {
      processedValue = formatCardNumber(value);
    } else if (name === "expiryDate") {
      processedValue = formatExpiryDate(value);
    } else if (name === "cvv") {
      processedValue = value.replace(/[^0-9]/g, "");
    }

    setPaymentDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : processedValue,
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setIsSubmitted(true);

    if (validateForm()) {
      onSubmit({ doctor, paymentDetails });
      //   alert("Payment processed successfully!");
      // Redirect to chat page after payment
      navigate("/chat");
    }
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Payment Information
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={paymentDetails.fullName}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border ${
                formErrors.fullName ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              required
            />
            {formErrors.fullName && (
              <p className="mt-1 text-sm text-red-600">{formErrors.fullName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={paymentDetails.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border ${
                formErrors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              required
            />
            {formErrors.email && (
              <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456"
              maxLength="19"
              className={`w-full px-4 py-2 border ${
                formErrors.cardNumber ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              required
            />
            {formErrors.cardNumber && (
              <p className="mt-1 text-sm text-red-600">
                {formErrors.cardNumber}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="expiryDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
                maxLength="5"
                className={`w-full px-4 py-2 border ${
                  formErrors.expiryDate ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                required
              />
              {formErrors.expiryDate && (
                <p className="mt-1 text-sm text-red-600">
                  {formErrors.expiryDate}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleInputChange}
                placeholder="123"
                maxLength="4"
                className={`w-full px-4 py-2 border ${
                  formErrors.cvv ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                required
              />
              {formErrors.cvv && (
                <p className="mt-1 text-sm text-red-600">{formErrors.cvv}</p>
              )}
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={paymentDetails.agreeTerms}
                onChange={handleInputChange}
                className={`focus:ring-blue-500 h-4 w-4 text-blue-600 ${
                  formErrors.agreeTerms ? "border-red-500" : "border-gray-300"
                } rounded`}
                required
              />
            </div>
            <div className="ml-2 text-sm">
              <label
                htmlFor="agreeTerms"
                className={`font-medium ${
                  formErrors.agreeTerms ? "text-red-600" : "text-gray-700"
                }`}
              >
                I agree to the{" "}
                <a href="#" className="text-blue-600 hover:text-blue-500">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:text-blue-500">
                  Privacy Policy
                </a>
              </label>
              {formErrors.agreeTerms && (
                <p className="mt-1 text-sm text-red-600">
                  {formErrors.agreeTerms}
                </p>
              )}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Payment Summary
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Consultation Fee:</span>
                <span className="text-gray-900">
                  {doctor.payPerConsultation}XAF
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Service Fee:</span>
                <span className="text-gray-900">200XAF</span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                <span className="text-gray-800 font-semibold">Total:</span>
                <span className="text-gray-900 font-bold">
                  {doctor.payPerConsultation + 200}XAF
                </span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            // disabled={isSubmitted && Object.keys(formErrors).length > 0}
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

PaymentForm.propTypes = {
  doctor: PropTypes.shape({
    payPerConsultation: PropTypes.number.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PaymentForm;
