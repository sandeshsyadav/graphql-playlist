import {ApolloClient} from '@apollo/client/core';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/client';
import { render } from 'react-dom';

// components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// apollo client setup
const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql'
});
function App() {
  return (
    <div id="main">
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Reading List</h1>
        <BookList/>
        <AddBook />
      </div>
    </ApolloProvider>
    </div>
  );
}
render(<App />, document.getElementById('root'));

export default App;
