import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GreetingCat from "../components/GreetingCat";
import { Teste, Dogs } from "../hosts";
import Home from "../pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/doguinho" component={Dogs} />
          <Route path="/gato/:greeting" component={GreetingCat} />
          <Route path="/teste/" component={Teste} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default Routes
