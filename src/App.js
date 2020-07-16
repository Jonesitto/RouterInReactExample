import React, { Component } from "react";
import { Route, Switch, Link, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./component/Home";
import CreatePost from "./component/CreatePost";
import ShowPost from "./component/ShowPost";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="Menu">
            <Link className="nav-item nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link active" to="/createpost">
              Create Post
            </Link>
            <Link className="nav-item nav-link active" to="/showpost">
              Show Post
            </Link>
          </div>

          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/createpost" component={CreatePost} />
              <Route exact path="/showpost" component={ShowPost} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
