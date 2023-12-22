import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/')
      .then(result => {
        if (Array.isArray(result.data)) {
          setUsers(result.data);
        } else {
          console.log('Data is not an array');
        }
      })
      .catch(err => console.log(err))
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:4000/deleteCoarse/" + id)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success btn-sm mb-2">
          Add +
        </Link>

        <table className="table mx-auto">
          <thead>
            <tr>
              <th>Coarsetname</th>
              <th>Student ID</th>
              <th>Prerequisite Course</th>
              <th>Department</th>
              <th>Status</th>
              <th>ESTC</th>
              <th>Credit Hour</th>
              <th>Semester</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.coarsetname}</td>
                <td>{user.studentId}</td>
                <td>{user.preRequstCoarse}</td>
                <td>{user.department}</td>
                <td>{user.status}</td>
                <td>{user.estc}</td>
                <td>{user.creditHour}</td>
                <td>{user.semister}</td>
                <td>{user.year}</td>
                <td>
                  <Link to={`/update/${user._id}`} className="btn btn-success">
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;