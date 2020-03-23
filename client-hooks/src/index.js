import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { DEV_API_ENDPOINT } from "./config";

const apolloClient = new ApolloClient({
  uri: DEV_API_ENDPOINT
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
