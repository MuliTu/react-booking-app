import { Typography } from "@mui/material";
import { Component } from "react";
import SalesPerson from "./components/persons/SalesPerson";
import TopStats from "./components/topStats/TopStats";
import ThemeHOC from "./HOC/ThemeHOC";
import WidthLimiter from "./wrappers/widthLimiter";

const TITLE = "Salespersons Leaderboard";

class App extends Component {
  render() {
    return (
      <>
        <TopStats />
        <Typography
          style={{ margin: "30px", textAlign: "center" }}
          variant="h4"
          gutterBottom
          color="textSecondary"
          component="div"
        >
          {TITLE}
        </Typography>
        <WidthLimiter width={800}>
          <SalesPerson />
        </WidthLimiter>
      </>
    );
  }
}

export default ThemeHOC(App);
