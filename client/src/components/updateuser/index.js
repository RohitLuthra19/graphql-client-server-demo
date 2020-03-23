import React, { PureComponent } from "react";
import { Mutation } from "react-apollo";

import "./updateuser.css";
import { UPDATE_USER } from "../../mutations";
import { GET_ALL_USERS } from "../../queries";

class UpdateUser extends PureComponent {
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

  submitForm = (e, updateUser) => {
    e.preventDefault();
    const { id, email, username } = this.state;
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
        <h1>Update User</h1>
        <Mutation mutation={UPDATE_USER}>
          {(updateUser, { data }) => (
            <form
              onSubmit={e => this.submitForm(e, updateUser)}
              className="update-user"
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
              <button type="submit">Update User</button>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default UpdateUser;
