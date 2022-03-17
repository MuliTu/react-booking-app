import { ThemeProvider, createTheme, Switch } from "@mui/material";
import React, { Component } from "react";

const isDarkTheme = () => {
  // if run in node, return false
  if (
    typeof process !== "undefined" &&
    process.versions &&
    process.versions.node
  ) {
    return false;
  }

  if (!window.matchMedia) {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const ThemeHOC = (WrappedComponent) => {
  return class ThemeContoller extends Component {
    constructor(props) {
      super(props);
      this.state = {
        checked: isDarkTheme(),
      };
    }

    componentDidMount() {
      const ls = localStorage.getItem("theme");
      if (ls)
        this.setState({
          ...JSON.parse(ls),
        });
      else this.updateLS();
    }

    updateLS = () => {
      localStorage.setItem("theme", JSON.stringify(this.state));
    };

    onChangeThame = () => {
      this.setState(
        {
          checked: !this.state.checked,
        },
        this.updateLS
      );
    };
    render() {
      const { checked } = this.state;
      const theme = checked ? darkTheme : lightTheme;
      return (
        <ThemeProvider theme={theme}>
          <div className={checked ? "App-dark" : "App-light"}>
            <Switch checked={checked} onChange={this.onChangeThame} />
            <WrappedComponent />
          </div>
        </ThemeProvider>
      );
    }
  };
};

export default ThemeHOC;
