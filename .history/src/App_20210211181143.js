import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Intro from './pages/Intro';

const Person = React.lazy(() => import('./pages/pe'));
const People_circle = React.lazy(() => import('./pages/Home'));
const Globe = React.lazy(() => import('./pages/Home'));
const Love_me = React.lazy(() => import('./pages/Home'));
const Profile = React.lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<p> Loading...</p>}>
        <Switch>
            <Route path="/person" component={Home} exact/>
            <Route path="/people-circle" component={Home} exact/>
            <Route path="/globe" component={Home} exact/>
            <Route path="/love-me" component={Home} exact/>
            <Route path="/profile" component={Home} exact/>
            <Route path="/" component={Intro} exact/>
        </Switch>
      </Suspense>
    </div>
  )  
}

export default App;
