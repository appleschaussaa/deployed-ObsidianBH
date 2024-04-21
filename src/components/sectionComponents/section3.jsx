import React, { Suspense } from "react";
import { Card, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
// import SwipeableTextMobileStepper from "../../components/Reusable/CardGridList";
import CardList from "../Reusable/CardGridList";

const Section3 = () => {
    return (
        <Grid2
            container
            // columnSpacing={2}
            rowSpacing={4}
            md={12}
            sx={{
                display: "flex",
                // flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // py: 2,
                // height: "100%",
            }}
        >
            <Grid2
                component={Card}
                md={2.25}
                sx={{
                    justifyContent: "center",
                    textAlign: "center",
                    color: "primary.tertiary",
                    bgcolor: "primary.secondary",
                    borderRadius: 2,
                    fontSize: {
                        xs: "h6.fontSize",
                        sm: "h5.fontSize",
                        md: "h4.fontSize",
                    },
                }}
            >
                <Grid2
                    component={Typography}
                    md={12}
                    variant="h4"
                    sx={{
                    //     justifyContent: "center",
                    //     textAlign: "center",
                    //     color: "primary.tertiary",
                    //     bgcolor: "primary.secondary",
                    //     borderRadius: 2,
                        // fontSize: {
                        //     xs: "h6.fontSize",
                        //     sm: "h5.fontSize",
                        //     md: "h4.fontSize",
                        // },
                    }}
                >
                    Featured Beers!
                </Grid2>
            </Grid2>
            <Grid2
                md={12}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Suspense fallback={React.lazy || <div>Welcome</div>}>
                    <CardList />
                </Suspense>
            </Grid2>
        </Grid2>
    );
};

export default Section3;
