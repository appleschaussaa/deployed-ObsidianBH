import React from "react";
import { Typography, Button, Card, CardContent } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
// import MyComponent from "../Reusable/Gmap";
import {
    // Twitter,
    Instagram,
} from "@mui/icons-material";

const InfoSection = () => {
    return (
        <Grid2
            xl={12}
            container
            // columnSpacing={0}
            sx={{
                alignItems: "start",
                alignContent: "center",
                justifyContent: "center",
                height: "100%",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                py: 2
                // color: "primary.tertiary",
                // backgroundColor: "primary.main",
                // textAlign: "center",
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
                <Card
                    sx={{
                        padding: 2,
                        pr: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                        backgroundColor: "primary.main",
                        color: "primary.tertiary",
                        // flexGrow: 1,
                    }}
                >
                    <CardContent sx={{ textAlign: "center", }}>
                        <Typography
                            variant="h5"
                            sx={{ textDecoration: "underline", textAlign: "center" }}
                        >
                            Hours
                        </Typography>
                        <Typography>Thursday: 2pm - 8pm</Typography>
                        <Typography>Friday: 2pm - 10pm</Typography>
                        <Typography>Saturday: 1pm - 10pm</Typography>
                        <Typography>Sunday: 1pm - 8pm</Typography>
                    </CardContent>
                </Card>
            </Grid2>
            <Grid2
                md={1.75}
                mdOffset={0}
                sx={{
                    // display: "flex",
                    // flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Card
                    sx={{
                        padding: 2,
                        px: 0,
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "primary.main",
                        color: "primary.tertiary",
                    }}
                >
                    <CardContent sx={{ textAlign: "center", px: 0, }}>
                        <Typography
                            variant="h5"
                            sx={{ textDecoration: "underline", textAlign: "center"}}
                        >
                            Directions
                        </Typography>
                        <Typography>1420 Hewitt Ave</Typography>
                        <Typography>Everett, WA 98201</Typography>
                        <Typography>(Near Hewitt and Hoyt)</Typography>
                    </CardContent>
                </Card>
            </Grid2>
            <Grid2
                xs={12}
                md={2}
                rowGap={0}
                sx={{
                    alignItems: "start",
                    textAlign: "left",
                }}
            >
                <Card
                    sx={{
                        padding: 2,
                        pl: 0,
                        display: "flex",
                        justifyContent: "flex-start",
                        backgroundColor: "primary.main",
                        color: "primary.tertiary",
                    }}
                >
                    <CardContent sx={{ }}>
                        <Grid2
                            component={Typography}
                            variant="h5"
                            sx={{
                                color: "primary.tertiary",
                                textDecoration: "underline",
                            }}
                        >
                            Follow us on:
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
                                sx={{
                                    color: "primary.tertiary",
                                    fontSize: "medium",
                                }}
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
                        </Grid2>
                        <Grid2
                            component={Button}
                            size="small"
                            sx={{
                                color: "primary.tertiary",
                                fontSize: "medium",
                            }}
                        >
                            Yelp/Other social
                        </Grid2>
                    </CardContent>
                </Card>
            </Grid2>
        </Grid2>
    );
};

export default InfoSection;
