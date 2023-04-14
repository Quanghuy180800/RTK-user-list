import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../redux/usersSlice";
import { Link} from 'react-router-dom'

const UserList = () => {
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.users);

  const [user, setUser] = useState([]);

  useEffect(() => {
    dispatch(getUserDetail("5"));
    setUser(list);
  }, [dispatch, list]);
  

  return (
    <div className="container">
      <div className="list-item">
        <table id="user">
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
          
            <tr >
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              {/* <td>{`${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`}</td> */}
              <td>{user.phone}</td>
              <td>{user.website}</td>
              {/* <td>{` ${user.company.name} ${user.company.catchPhrase} ${user.company.bs} `}</td> */}
            </tr>
          
        </table>

        <Link to='/' ><button onClick="window.location.href=window.location.href">X--</button></Link>
      </div>
    </div>
  );
};

export default UserList;
