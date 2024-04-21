import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const Footer = () => {
    return (
        <Grid2
            sm={12}
            md={12}
            container
            sx={{
                // flexDirection: "column",
                width: "100%",
                // alignItems: "right",
                // justifyContent: "center",
                // alignContent: "right",
                height: "5vh",
                marginBottom: "auto",
                bottom: 0,
                backgroundColor: "primary.main",
                color: "primary.tertiary",
                // outline: "1px solid white",
            }}
        >
            <Grid2
                container
                xs={11.75}
                md={11.75}
                sx={{ justifyContent: "right" }}
            >
                <Typography
                    variant="body1"
                    sx={{ textAlign: "center", color: "bg.main" }}
                >
                    Obsidian Beerhall
                </Typography>{" "}
                <Typography
                    variant="body2"
                    fontWeight={200}
                    sx={{ textAlign: "center", color: "bg.main", pl: 0.2 }}
                >
                    {""}©2024
                </Typography>
            </Grid2>
        </Grid2>
    );
};

export default Footer;
