import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import "./updateuser.css";
import { UPDATE_USER } from "../../mutations";
import { GET_ALL_USERS } from "../../queries";

function UpdateUser() {
  const baseState = {
    id: "",
    email: "",
    username: ""
  };
  const [state, setState] = useState(baseState);

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const resetForm = () => {
    setState({ ...baseState });
  };

  const submitForm = (e, updateUser) => {
    e.preventDefault();
    const { id, email, username } = state;
    updateUser({
      variables: { id, email, username },
      refetchQueries: () => {
        return [
          {
            query: GET_ALL_USERS
          }
        ];
      },
      awaitRefetchQueries: true
    });
    resetForm();
  };

  const { id, email, username } = state;
  const [updateUser] = useMutation(UPDATE_USER);

  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={e => submitForm(e, updateUser)} className="update-user">
        <input
          type="text"
          placeholder="id"
          name="id"
          value={id}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default UpdateUser;
