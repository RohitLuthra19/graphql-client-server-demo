import React from "react";
import { Query } from "react-apollo";

import "./users.css";
import { GET_ALL_USERS } from "../../queries";

const getData = users => {
  return users.map(user => {
    return (
      <li key={user.email}>
        <span className="field-label">Id: </span> <span>{user.id}</span>
        <br />
        <span className="field-label">Username: </span>
        <span>{user.username}</span>
        <br />
        <span className="field-label">Email: </span> <span>{user.email}</span>
      </li>
    );
  });
};

function Users() {
  return (
    <div>
      <h1>All Users</h1>
      <Query query={GET_ALL_USERS}>
        {({ data, loading, error }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error</div>;

          return <ul>{getData(data.getAllUsers)}</ul>;
        }}
      </Query>
    </div>
  );
}

export default Users;
