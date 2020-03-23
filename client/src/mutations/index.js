import { gql } from "apollo-boost";

export const ADD_USER = gql`
  mutation addUser($email: String!, $username: String!, $id: String!) {
    addUser(email: $email, username: $username, id: $id) {
      id
      email
      username
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($email: String!) {
    deleteUser(email: $email) {
      id
      email
      username
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($email: String!, $username: String!, $id: String!) {
    updateUser(email: $email, username: $username, id: $id) {
      id
      email
      username
    }
  }
`;
