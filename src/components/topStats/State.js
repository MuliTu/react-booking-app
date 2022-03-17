import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import CountUp from "react-countup";

const capitalizeName = (string) => {
  let replaceWithUpperCase = string.replace(/([A-Z])(?![A-Z])/g, " $1").trim();
  replaceWithUpperCase =
    replaceWithUpperCase.charAt(0).toUpperCase() +
    replaceWithUpperCase.slice(1);
  return replaceWithUpperCase;
};
const State = ({ title, value = null }) => {
  const splitName = capitalizeName(title);
  const isPercent = splitName.includes("Percent") ? "%" : "";
  return (
    <Card className="state">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {splitName}
        </Typography>
        <Typography color="textSecondary" style={{ fontSize: "30px" }}>
          <CountUp end={value} duration={0.7} suffix={isPercent} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default State;
