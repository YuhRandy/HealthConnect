import { useState } from "react";
import DoctorCard from "../components/DoctorCard";
import doctorsData from "../data/doctorsdata.json";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpeciality, setFilterSpeciality] = useState("");

  // Filter doctors based on search term and speciality
  const filteredDoctors = doctorsData.filter((doctor) => {
    const matchesName = doctor.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSpeciality = filterSpeciality
      ? doctor.speciality === filterSpeciality
      : true;
    return matchesName && matchesSpeciality;
  });

  // Get unique specialities for the filter dropdown
  const specialities = [
    ...new Set(doctorsData.map((doctor) => doctor.speciality)),
  ];

  return (
    <div className="doctors-page">
      <h1 className="text-4xl mb-5 mt-2">Find a Doctor</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Speciality Filter Dropdown */}
      <select
        value={filterSpeciality}
        onChange={(e) => setFilterSpeciality(e.target.value)}
      >
        <option value="">All Specialities</option>
        {specialities.map((speciality) => (
          <option key={speciality} value={speciality}>
            {speciality}
          </option>
        ))}
      </select>

      {/* Display Filtered Doctors */}
      <div className="doctors-list mt-3">
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
