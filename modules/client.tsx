import {
  ApolloClient,
  InMemoryCache,
  DefaultOptions,
  from,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError, ...rest }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    console.log(`[query] ${rest.operation.query}`);
    console.log(`[query] ${rest.operation.variables}`);
  }
});

const timeStartLink = new ApolloLink((operation, forward) => {
  operation.setContext({ start: performance.now() });
  return forward(operation);
});

const logTimeLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((data) => {
    const time = performance.now() - operation.getContext().start;

    return data;
  });
});

const uri = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

const httpLink = new HttpLink({
  uri,
});
const uploadLink = createUploadLink({ uri });

const BROWSER_LINK = from([errorLink, timeStartLink, logTimeLink]).concat(
  uploadLink
);
const SERVER_LINK = from([errorLink]).concat(httpLink);

export const client = new ApolloClient({
  link: process.browser ? BROWSER_LINK : SERVER_LINK,
  cache: new InMemoryCache(),
  defaultOptions: process.browser ? undefined : defaultOptions,
});
