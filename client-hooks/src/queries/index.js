import { gql } from "apollo-boost";

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      email
      username
    }
  }
`;

export const GET_USER = gql`
  query {
    getUser(email: String) {
      id
      email
      username
    }
  }
`;
