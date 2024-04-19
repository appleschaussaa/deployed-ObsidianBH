import { createTheme } from "@mui/material";

const theme = createTheme({
    // components: {
        // MuiButton: {
        //     styleOverrides: {
        //         root: {
        //               fontSize:
        //         },
        //     },
        // },
    // },
    typography: {
        fontFamily: ["Roboto"].join(","),
        // h3: {
        //     fontSize: "1.2rem",
        //     "@media (min-width:600px)": {
        //         fontSize: "1.5rem",
        //     },
        //     [theme.breakpoints.up("md")]: {
        //         fontSize: "2.4rem",
        //     },
        // },
    },
    palette: {
        //  foresst green, white and brick brown
        primary: {
            // Obsidian Black (purple hue)
            // main: "#2e293a",
            // More dominant color, less washed out
            // main: "#0f0731",
            // Darkest of the Obsidian shades
            // main: "#020107",
            main: "hsl(250, 86%, 3%)",
            // One shade down from above
            // main: "#04020e",
            // 2 down from darkest, purple hue becomes more prominent
            // main: "#060315",
            // Dark Orange / Burnt Sienna variant
            alternate: "#de8121",
            // alternate: "#58330d",
            // alternate: "#CD7F32",
            // close to current Forest Green but darker, original
            secondary: "hsl(142, 96%, 13%)",
            // Forest Green variant
            // secondary: "hsl(149, 82%, 16%)",
            // Old orange color
            // alternate: "#CD7F32",
            // darkSecond: "#A0522D",
            // Dulux Grey Steel
            tertiary: "hsl(60, 1%, 73%)",
        },
        bg: {
            paper: "#ffffff",
            main: "hsl(60, 1%, 73%)",
        },
        // boxBackground: {
        //     paper: "#fea82f",
        //     default: "#ffffff",
        //     main: "#ffffff",
        //     test: "#ffffff",
        // },
        // text: {
        //     main: "#ffffff",
        //     primary: "#ffffff",
        //     secondary: "#ffffff",
        //     disabled: "#ffffff",
        // },
    },
});

export default theme;
