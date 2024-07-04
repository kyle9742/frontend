import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    if (window.confirm("정말로 삭제할까요?")) {
      await axios.delete(`http://localhost:8080/api/user/${id}`);
      loadUsers();
    }
  };

  return (
    <div className="container">
      <table className="table border shadow my-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">유저네임</th>
            <th scope="col">이름</th>
            <th scope="col">이메일</th>
            <th scope="col">액션</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/viewuser/${user.id}`} className="btn btn-outline-secondary mx-2">
                  보기
                </Link>
                <Link to={`/edituser/${user.id}`} className="btn btn-outline-warning mx-2">
                  수정
                </Link>
                <button onClick={() => deleteUser(user.id)} className="btn btn-outline-danger mx-2">
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
