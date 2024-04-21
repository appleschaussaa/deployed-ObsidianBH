import React from "react";
import { Box, Card, CardHeader, CardMedia } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { InfoSection, Section3, SectionX, AboutOB } from "../components/Index";
import PubWallpaper from "../assets/pub-wallpaper.jpg";
import StoneSpacer from "../assets/obsidian-pavement.png";
import ObsidianMenu from "../assets/ObsidianBHMenu.png";

const HomePage = () => {
    return (
        <Grid2
            container
            rowSpacing={0}
            sx={{
                flexDirection: "column",
                height: "100%",
            }}
        >
            <Grid2 container sx={{}}>
                <Grid2 xs={12} md={12}>
                    <SectionX />
                </Grid2>
            </Grid2>
            <Grid2
                container
                sx={{
                    m: 0,
                    p: 0,
                    height: {
                        xs: "8dvh",
                        md: "10dvh",
                        lg: "12dvh",
                        // xl: "885px",
                    },
                    backgroundImage: `url(${StoneSpacer})`,
                    backgroundSize: "contain",
                    // backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    // backgroundAttachment: "fixed",
                    outline: 4,
                    outlineColor: "primary.tertiary",
                    outlineStyle: "solid",
                }}
            ></Grid2>
            <Grid2
                container
                // rowSpacing={4}
                spacing={0}
                // rowGap={4}
                sx={{
                    backgroundImage: `url(${PubWallpaper})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    outline: 4,
                    outlineColor: "primary.tertiary",
                }}
            >
                <Grid2
                    xs={12}
                    md={12}
                    // rowSpacing={1}
                    sx={{
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        py: 6,
                        borderRadius: 2,
                    }}
                    // height={700}
                >
                    <Section3 />
                </Grid2>
                <Grid2
                    xs={12}
                    md={12}
                    sx={{
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mb: 8,
                    }}
                >
                    <Grid2
                        component={Card}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            maxWidth: "fit-content",
                            outline: {
                                xs: "2px solid white",
                                lg: "6px solid white",
                            },
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {/* <CardHeader
                            title="Shrimp and Chorizo Paella"
                            subheader=""
                        /> */}
                        <CardMedia
                            component={"img"}
                            image={ObsidianMenu}
                            xs={12}
                            md={12}
                            onclick="this.requestFullscreen()"
                            sx={{
                                height: {
                                    xs: "505px",
                                    sm: "485px",
                                    md: "585px",
                                    lg: "615px",
                                    xl: "885px",
                                },
                                width: {
                                    xs: "95%",
                                    sm: "100%",
                                    md: "100%",
                                    lg: "100%",
                                    xl: "100%",
                                },
                                // py: 1,
                            }}
                        ></CardMedia>
                    </Grid2>
                </Grid2>
                {/* <Grid2 xs={12} sx={{ justifyContent: "center", pb: 15 }}>
                    <AboutOB />
                </Grid2> */}
            </Grid2>
            <Grid2
                xs={12}
                md={12}
                sx={{
                    color: "primary.tertiary",
                    backgroundColor: "primary.main",
                }}
            >
                {/* <Grid2 xs={12} md={12}> */}
                <InfoSection />
                {/* </Grid2> */}
            </Grid2>
        </Grid2>
    );
};

export default HomePage;
