import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import "./deleteuser.css";
import { DELETE_USER } from "../../mutations";
import { GET_ALL_USERS } from "../../queries";

function DeleteUser() {
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

  const submitForm = (e, deleteUser) => {
    e.preventDefault();
    const { id, email, username } = state;
    deleteUser({
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

  const { email } = state;
  const [deleteUser] = useMutation(DELETE_USER);

  return (
    <div>
      <h1>Delete User</h1>
      <form onSubmit={e => submitForm(e, deleteUser)} className="delete-user">
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit">Delete User</button>
      </form>
    </div>
  );
}

export default DeleteUser;
