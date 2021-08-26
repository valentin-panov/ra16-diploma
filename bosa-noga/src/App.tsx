import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/style.css';
import Skeleton from './components/Skeleton/Skeleton';
import Error from './components/Error/Error';
import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';

export const appURL = '/ra-bosa-noga';

function App(): ReactElement {
  return (
    <Router basename={appURL}>
      <Route exact path="/" />
      <div className="wrapper>">
        <Header />
        <Main>
          <Banner />
          <Switch>
            <Route path="/about.html" exact component={Loading} />
            <Route path="/contacts.html" exact component={Error} />
            <Route path="/catalog.html" exact component={Loading} />
            <Route path="/services/:id" exact component={Loading} />
          </Switch>

          <Loading />
          <Error />

          <div style={{ height: '50px', width: '200px' }}>
            <Skeleton />
          </div>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
