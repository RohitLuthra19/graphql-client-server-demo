import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import "./adduser.css";
import { ADD_USER } from "../../mutations";
import { GET_ALL_USERS } from "../../queries";

function AddUser() {
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

  const submitForm = (e, addUser) => {
    e.preventDefault();
    const { id, email, username } = state;
    addUser({
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
  const [addUser] = useMutation(ADD_USER);

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={e => submitForm(e, addUser)} className="add-user">
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
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
