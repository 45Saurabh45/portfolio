import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    svgHover: {
        fill: theme.palette.foreground.default,
        "&:hover": {
            fill: theme.palette.primary.main,
        },
        transition: "all 0.5s ease",
    },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={classes.svg}
        >
            {/* Circle */}
            <circle cx="50" cy="50" r="45" />

            {/* Letter S */}
            <text
                x="50"
                y="60" // Adjusted y position for centering
                fontFamily="Tahoma"
                fontSize="40" // Adjust font size as needed
                fill="white"
                textAnchor="middle" // Centers text horizontally
                dominantBaseline="middle" // Centers text vertically
            >
                S
            </text>
        </svg>
    );
};
