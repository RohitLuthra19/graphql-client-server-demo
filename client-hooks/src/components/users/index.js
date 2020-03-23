import React from "react";
import { useQuery } from "@apollo/react-hooks";

import "./users.css";
import { GET_ALL_USERS } from "../../queries";

const getData = (loading, error, users) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  if (users.length)
    return (
      <ul>
        {users.map(user => {
          return (
            <li key={user.email}>
              <span className="field-label">Id: </span> <span>{user.id}</span>
              <br />
              <span className="field-label">Username: </span>
              <span>{user.username}</span>
              <br />
              <span className="field-label">Email: </span>{" "}
              <span>{user.email}</span>
            </li>
          );
        })}
      </ul>
    );
};

function Users() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  return (
    <div>
      <h1>All Users</h1>
      {getData(loading, error, data && data.getAllUsers)}
    </div>
  );
}

export default Users;
