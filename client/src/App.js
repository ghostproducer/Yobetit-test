import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import "./App.css";

import Question1 from "./Components/Question1";
import Question2 from "./Components/Question2";
import Question3 from "./Components/Question3";
import Question4 from "./Components/Question4";
import SQL1 from "./Components/SQL1";
import SQL2 from "./Components/SQL2";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};
makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

class App extends Component {
  state = {
    value: 0
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Tabs value={this.state.value} onChange={this.handleChange}>
            <Tab label="Question 1" />
            <Tab label="Question 2" />
            <Tab label="Question 3" />
            <Tab label="Question 4" />
            <Tab label="Question 1 - SQL" />
            <Tab label="Question 2 - SQL" />
          </Tabs>
        </AppBar>
        {this.state.value === 0 && <Question1 />}
        {this.state.value === 1 && <Question2 />}
        {this.state.value === 2 && <Question3 />}
        {this.state.value === 3 && <Question4 />}
        {this.state.value === 4 && <SQL1 />}
        {this.state.value === 5 && <SQL2 />}
      </div>
    );
  }
}

export default App;
