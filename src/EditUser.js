import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditUser() {

  const {id} = useParams();
  
  const loadUser = async() => {
    const result = await axios.get(`http://localhost:8080/api/users/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/user/${id}`, user);
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">수정 하기</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                이름
              </label>
              <input onChange={onInputChange} value={user.name} type="text" id="name" className="form-control" placeholder="이름 입력" name="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                유저네임 입력
              </label>
              <input onChange={onInputChange} value={user.username} type="text" id="name" className="form-control" placeholder="이름 입력" name="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                이메일 입력
              </label>
              <input onChange={onInputChange} value={user.email} type="text" id="name" className="form-control" placeholder="이름 입력" name="email" />
            </div>

            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-outline-primary px-3 mx-2">
                수정
              </button>
              <Link to="/" type="button" className="btn btn-outline-danger px-3 mx-2">
                취소
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;