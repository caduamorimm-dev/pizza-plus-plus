import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    animation: "$slide 15s linear infinite",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    display: "inline-block",
    margin: "0 40px",
    verticalAlign: "middle",
  },
  "@keyframes slide": {
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(-100%)" },
  },
});

export const SponsorSlider = ({ sponsors }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {sponsors.map((sponsor, index) => (
        <img
          key={index}
          src={sponsor.logoUrl}
          alt={sponsor.name}
          className={classes.logo}
        />
      ))}
    </div>
  );
};
