import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/usersSlice";
import { Link }from 'react-router-dom';

const UserList = () => {
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.users);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(getAllUsers());
    setUsers(list);
  }, [dispatch, list]);

  return (
    <div className="container">
      <div className="list-item">
        <table id="user">
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
          {users?.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td><Link to='/details'><button>X</button></Link></td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default UserList;
