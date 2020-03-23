import React, { PureComponent } from "react";
import { Mutation } from "react-apollo";

import "./adduser.css";
import { ADD_USER } from "../../mutations";
import { GET_ALL_USERS } from "../../queries";

class AddUser extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      username: ""
    };
    this.baseState = this.state;
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitForm = (e, addUser) => {
    e.preventDefault();
    const { id, email, username } = this.state;
    addUser({
      variables: { id, email, username },
      refetchQueries: () => {
        console.log("refetch");
        return [
          {
            query: GET_ALL_USERS
          }
        ];
      },
      awaitRefetchQueries: true
    });
    this.resetForm();
  };

  resetForm = () => {
    this.setState(this.baseState);
  };

  render() {
    const { handleChange } = this;
    const { id, email, username } = this.state;

    return (
      <div>
        <h1>Add User</h1>
        <Mutation mutation={ADD_USER}>
          {(addUser, { data }) => (
            <form
              onSubmit={e => this.submitForm(e, addUser)}
              className="add-user"
            >
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
          )}
        </Mutation>
      </div>
    );
  }
}

export default AddUser;
