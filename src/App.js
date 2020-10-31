import React from "react";
import "./styles.css";
import styled, { createGlobalStyle } from "styled-components";

import Homepage from "./components/Homepage.js";
import Profile from "./components/Profile.js";
import SE_Projects from "./components/SE_Projects.js";
import DS_Projects from "./components/DS_Projects.js";

import { Route, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { AnimatedRoute } from "react-router-transition";

/*import { NavHashLink } from "react-router-hash-link";*/

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(0,49,83);
    overflow: hidden
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
`;

class App extends React.Component {
  render() {
    const home = () => <Homepage />;
    const profile = () => <Profile />;

    return (
      <React.Fragment>
        <GlobalStyle />
        <Wrapper>
          <Switch onUpdate={() => console.log("fuck")}>
            <Route exact path="/" component={Homepage} />
            <Route path="/profile" component={Profile} />
            <Route path="/se_projects" component={SE_Projects} />
            <Route path="/ds_projects" component={DS_Projects} />
          </Switch>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
