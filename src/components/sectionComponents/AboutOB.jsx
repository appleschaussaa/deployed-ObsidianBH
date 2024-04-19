import * as React from "react";
import { Typography, Card } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const AboutOB = () => {
    return (
        <Grid2
            container
            md={12}
            // mdOffset={1}
            rowSpacing={2}
            rowGap={3}
            columnGap={3}
            sx={{
                justifyContent: "center",
                alignContent: "center",
                height: "100%",
                color: "primary.main",
                background: "inherit",
                // p: 1,
                borderRadius: 1,
            }}
        >
            <Grid2
                component={Card}
                md={12}
                elevation={8}
                sx={{
                    justifyContent: "center",
                    alignContent: "center",
                    height: "5em",
                    background: "inherit",
                }}
            >
                <Grid2
                    container
                    sx={{
                        // display: "flex",
                        justifyContent: "center",
                        // alignContent: "center",
                        // alignItems: "center",
                    }}
                >
                    <Grid2
                        md={2}
                        component={Typography}
                        variant="h4"
                        sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            color: "primary.tertiary",
                            bgcolor: "primary.secondary",
                            borderRadius: 2,
                        }}
                    >
                        Obsidian Beerhall
                    </Grid2>
                </Grid2>
            </Grid2>
            <Grid2
                component={Card}
                md={3}
                elevation={4}
                sx={{
                    bgcolor: "primary.tertiary",
                }}
            >
                <Grid2
                    container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Grid2 md={8} component={Typography} variant="h5" sx={{}}>
                        What brought us here/our story
                    </Grid2>
                    <Grid2
                        md={10}
                        component={Typography}
                        variant="body1"
                        sx={{}}
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Repudiandae
                        <br />
                        <br />
                        fuga eligendi modi quidem debitis incidunt sunt optio
                        necessitatibus sed, sapiente commodi aut voluptatibus
                        officia ratione in aspernatur.fuga eligendi modi quidem
                        debitis incidunt sunt optio necessitatibus sed, sapiente
                        commodi aut voluptatibus officia ratione in
                        aspernatur.fuga eligendi modi quidem debitis incidunt
                        sunt optio necessitatibus sed, sapiente commodi aut
                        voluptatibus officia ratione in aspernatur.
                    </Grid2>
                </Grid2>
            </Grid2>
            <Grid2
                component={Card}
                md={3}
                elevation={4}
                sx={{
                    height: "100%",
                    borderRadius: 2,
                    bgcolor: "primary.tertiary",
                }}
            >
                <Grid2
                    container
                    md={12}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Grid2 md={8} component={Typography} variant="h5" sx={{}}>
                        {" "}
                        cool pic of Craig (out front of bar/ pouring a beer/
                        portrait)
                    </Grid2>
                    <Grid2
                        md={10}
                        component={Typography}
                        variant="body1"
                        sx={{}}
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Repudiandae
                        <br />
                        <br />
                        fuga eligendi modi quidem debitis incidunt sunt optio
                        necessitatibus sed, sapiente commodi aut voluptatibus
                        officia ratione in aspernatur.fuga eligendi modi quidem
                        debitis incidunt sunt optio necessitatibus sed, sapiente
                        commodi aut voluptatibus officia ratione in
                        aspernatur.fuga eligendi modi quidem debitis incidunt
                        sunt optio necessitatibus sed, sapiente commodi aut
                        voluptatibus officia ratione in aspernatur.
                    </Grid2>
                </Grid2>
            </Grid2>
            <Grid2
                component={Card}
                md={3}
                elevation={4}
                sx={{
                    height: "100%",
                    borderRadius: 2,
                    bgcolor: "primary.tertiary",
                }}
            >
                <Grid2
                    container
                    md={12}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Grid2 md={4} component={Typography} variant="h5" sx={{}}>
                        {" "}
                        wild card
                    </Grid2>
                    <Grid2
                        md={10}
                        component={Typography}
                        variant="body1"
                        sx={{}}
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Repudiandae
                        <br />
                        <br />
                        fuga eligendi modi quidem debitis incidunt sunt optio
                        necessitatibus sed, sapiente commodi aut voluptatibus
                        officia ratione in aspernatur.fuga eligendi modi quidem
                        debitis incidunt sunt optio necessitatibus sed, sapiente
                        commodi aut voluptatibus officia ratione in aspernatur.
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    );
};

export default AboutOB;
