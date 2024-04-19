import React from "react";
import { Typography, Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
// import MyComponent from "../Reusable/Gmap";
import {
    // Twitter,
    Instagram,
} from "@mui/icons-material";

const InfoSection = () => {
    return (
        <Grid2
            container
            // columnSpacing={0}
            sx={{
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                height: "100%",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                color: "primary.tertiary",
                backgroundColor: "primary.main",
                textAlign: "center",
                // pt: 1,
            }}
        >
            <Grid2
                md={2}
                mdOffset={0}
                sx={{
                    // display: "flex",
                    // flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h5" sx={{ textDecoration: "underline" }}>
                    Hours
                </Typography>
                <Typography>Monday - Friday</Typography>
                <Typography>1pm - 1am</Typography>
                {/* <Typography variant="h5" sx={{ textDecoration: "underline" }}>
                    Happy Hours
                </Typography>
                <Typography>
                    1:30 - 3:30 (Lunch specials) <br></br> 5:30 - 7:30 (Dinner
                    specials)
                </Typography> */}
            </Grid2>
            <Grid2
                md={2}
                sx={{
                    // display: "flex",
                    // flexDirection: "column",
                    // alignItems: "center",
                    // justifyContent: "center",
                }}
            >
                <Typography variant="h5" sx={{ textDecoration: "underline" }}>
                    Directions
                </Typography>
                <Typography>1420 Hewitt Ave</Typography>
                <Typography>Everett, WA 98201</Typography>
            </Grid2>
            <Grid2
                container
                xs={12}
                md={2}
                rowGap={0}
                sx={{
                    alignItems: "start",
                    textAlign: "left",
                    color: "primary.tertiary",
                }}
            >
                <Grid2
                    container
                    xs={12}
                    md={12}
                    // component={"a"}
                    // href="https://www.instagram.com/obsidian_beer_hall/"
                    sx={{}}
                >
                    <Grid2
                        component={Typography}
                        variant="h6"
                        sx={{
                            color: "primary.tertiary",
                            textDecoration: "underline",
                        }}
                    >
                        Follow us on:
                    </Grid2>
                </Grid2>
                <Grid2
                    container
                    xs={12}
                    md={12}
                    // component={"a"}
                    // href="https://www.instagram.com/obsidian_beer_hall/"
                    sx={{}}
                >
                    <Grid2
                        component={Button}
                        size="small"
                        href="https://www.instagram.com/obsidian_beer_hall/"
                        sx={{ color: "primary.tertiary", fontSize: "medium" }}
                    >
                        INSTAGRAM
                    </Grid2>
                    <Instagram />
                </Grid2>
                <Grid2
                    xs={12}
                    md={12}
                    // component={"a"}
                    // href="https://www.instagram.com/obsidian_beer_hall/"
                    sx={{}}
                >
                    {/* <Yelp /> */}
                    <Grid2
                        component={Button}
                        size="small"
                        sx={{ color: "primary.tertiary", fontSize: "medium" }}
                    >
                        Yelp (no icon)
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    );
};

export default InfoSection;

{
    /* <Grid2
                container
                md={3}
                sx={{ textAlign: "center", outline: "hidden" }}
            >
                <Grid2 sx={{}}>
                    <Typography
                        variant="h4"
                        sx={{
                            textDecoration: "underline",
                            textAlign: "center",
                        }}
                    >
                        Bird Eye
                    </Typography>
                    <MyComponent />
                    <Typography>View on Google Maps, needs API key</Typography>
                </Grid2>
            </Grid2> */
}

{
    /* <Grid2
                    container
                    xs={12}
                    md={12}
                    gap={1}
                    // component={"a"}
                    // href="https://www.instagram.com/obsidian_beer_hall/"
                >
                    <Grid2
                        component={Button}
                        size="small"
                        href="https://www.instagram.com/obsidian_beer_hall/"
                        sx={{ color: "primary.tertiary", fontSize: "medium" }}
                    >
                        Twitter/X
                    </Grid2>
                    <Grid2
                        component={Button}
                        size="small"
                        href="https://www.instagram.com/obsidian_beer_hall/"
                        sx={{ color: "primary.tertiary" }}
                    >
                        <Twitter />
                    </Grid2>

                    <Grid2
                        component={Button}
                        size="small"
                        href="https://www.instagram.com/obsidian_beer_hall/"
                        sx={{ color: "primary.tertiary" }}
                    >
                        <X />
                    </Grid2>
                </Grid2> */
}
{
    /* <Grid2
                    container
                    xs={12}
                    md={12}
                    gap={1}
                    // component={"a"}
                    // href="https://www.instagram.com/obsidian_beer_hall/"
                >
                    <Grid2
                        component={Button}
                        size="small"
                        href="https://www.instagram.com/obsidian_beer_hall/"
                        sx={{ color: "primary.tertiary", fontSize: "medium" }}
                    >
                        Facebook
                    </Grid2>
                    <Grid2
                        component={Button}
                        size="small"
                        href="https://www.instagram.com/obsidian_beer_hall/"
                        sx={{ color: "primary.tertiary" }}
                    >
                        <Facebook />
                    </Grid2>
                    <Grid2
                        component={Button}
                        size="small"
                        href="https://www.instagram.com/obsidian_beer_hall/"
                        sx={{ color: "primary.tertiary" }}
                    >
                        <FacebookRounded />
                    </Grid2>
                </Grid2> */
}
