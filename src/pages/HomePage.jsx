import React from "react";
import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { InfoSection, Section3, SectionX, AboutOB } from "../components/Index";
import PubWallpaper from "../assets/pub-wallpaper.jpg";
import StoneSpacer from "../assets/obsidian-pavement.png";

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
            <Grid2 container
                    sx={{
                        m: 0,
                        p: 0,
                        height: "12dvh",
                        backgroundImage: `url(${StoneSpacer})`,
                        backgroundSize: "contain",
                        // backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        // backgroundAttachment: "fixed",
                        outline: 4,
                        outlineColor: "primary.secondary",
                        outlineStyle: "solid",
                    }}
                ></Grid2>
            <Grid2
                container
                rowSpacing={4}
                spacing={0}
                gap={0}
                sx={{
                    backgroundImage: `url(${PubWallpaper})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    outline: 4,
                    outlineColor: "primary.secondary",
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
                <Grid2 xs={12} sx={{ justifyContent: "center", pb: 15 }}>
                    <AboutOB />
                </Grid2>
            </Grid2>
            <Grid2 container>
                <Grid2 xs={12} md={12}>
                    <InfoSection />
                </Grid2>
            </Grid2>
        </Grid2>
    );
};

export default HomePage;
