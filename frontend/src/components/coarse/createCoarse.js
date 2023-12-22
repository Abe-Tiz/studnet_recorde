import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateCoarse() {
  const [coarsetname, setCoarsetname] = useState("");
  const [preRequstCoarse, setPreRequstCoarse] = useState("");
  const [department, setDepartment] = useState("");
  const [creditHour, setCreditHour] = useState("");
  const [estc, setEstc] = useState("");
  const [status, setStatus] = useState("");
  const [semister, setSemister] = useState("");
  const [year, setYear] = useState("");
 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        Coarsetname: coarsetname,
        studentId: "", // Add the appropriate value here
        preRequstCoarse: preRequstCoarse,
        department: department,
        creditHour: creditHour,
        estc: estc,
        status: status,
        semister: semister,
        year: year,
     
      };
      const result = await axios.post("http://localhost:4000/createCoarse", formData);
      console.log(result.data);
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center pt-2">
      <div className="w-full max-w-lg">
        <div className="bg-white shadow-lg rounded px-8 pt-8 pb-4 mb-2">
          <h2 className="text-2xl font-bold mb-3 pt-1 text-center">
            Registration Course
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className="rounded border shadow-md p-2 w-full text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                id="coarsetname"
                type="text"
                placeholder="Enter the course name"
                value={coarsetname}
                onChange={(e) => setCoarsetname(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                className="rounded border shadow-md p-2 w-full text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                id="preRequstCoarse"
                type="text"
                placeholder="Enter the prerequisite course"
                value={preRequstCoarse}
                onChange={(e) => setPreRequstCoarse(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                className="rounded border shadow-md p-2 w-full text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                id="department"
                type="text"
                placeholder="Enter the department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                className="rounded border shadow-md p-2 w-full text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                id="creditHour"
                type="text"
                placeholder="Enter the credit hour"
                value={creditHour}
                onChange={(e) => setCreditHour(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                className="rounded border shadow-md p-2 w-full text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                id="estc"
                type="text"
                placeholder="Enter the ESTC"
                value={estc}
                onChange={(e) => setEstc(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                className="rounded border shadow-md p-2 w-full text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                id="status"
                type="bool"
                placeholder="Enter the status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                className="rounded border shadow-md p-2 w-full text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                id="semister"
                type="text"
                placeholder="Enter the semester"
                value={semister}
                onChange={(e) => setSemister(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                className="rounded border shadow-md p-2 w-full text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                id="year"
                type="date"
                placeholder="Enter the year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>

           
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateCoarse;