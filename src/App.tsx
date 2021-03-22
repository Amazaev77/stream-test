import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Header from './components/Header';
import Container from '@material-ui/core/Container';
import PostDetails from './components/pages/PostDetails';

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/post/:id" component={PostDetails} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;