import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import IntroPage from './Containers/IntroPage';

const App = () => {
  return (
    <div>
      <Suspense fallback={<p> Loading...</p>}>
        <Switch>
            <Route path="/" component={IntroPage} exact/>
            <Route path="/" component={IntroPage} exact/>
        </Switch>
      </Suspense>
    </div>
  )  
}

export default App;
