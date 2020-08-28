import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navigator } from "./Navigator/Navigator";
import { Home } from "./Home/Home";
import './App.css';

function App() {
  return (
    <div className="App" data-testid={"App"}>
        <BrowserRouter>
            <Navigator />
            <Switch>
                <Route path={"/"}>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export { App };
