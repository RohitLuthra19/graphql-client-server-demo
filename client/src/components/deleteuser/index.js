import React, { PureComponent } from "react";
import { Mutation } from "react-apollo";

import "./deleteuser.css";
import { DELETE_USER } from "../../mutations";
import { GET_ALL_USERS } from "../../queries";

class DeleteUser extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.baseState = this.state;
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitForm = (e, deleteUser) => {
    e.preventDefault();
    const { id, email, username } = this.state;
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
    this.resetForm();
  };

  resetForm = () => {
    this.setState(this.baseState);
  };

  render() {
    const { handleChange } = this;
    const { email } = this.state;

    return (
      <div>
        <h1>Delete User</h1>
        <Mutation mutation={DELETE_USER}>
          {(deleteUser, { data }) => (
            <form
              onSubmit={e => this.submitForm(e, deleteUser)}
              className="delete-user"
            >
              <input
                type="text"
                placeholder="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <button type="submit">Delete User</button>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default DeleteUser;
