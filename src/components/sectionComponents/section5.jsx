import * as React from "react";
import { Typography } from "@mui/material";
// import SignInSide from "../../components/User/SignIn";
import Grid2 from "@mui/material/Unstable_Grid2";

const Section6 = () => {
    return (
        <Grid2
            container
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "85dvh",
                // background: "rgba(0, 45, 4, 1)",
                border: "10px solid white",
                borderRadius: 2,
            }}
        >
            <Grid2
                xs={12}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    // background: "rgba(0, 45, 4, 1)",
                    border: "10px solid white",
                    borderRadius: 2,
                }}
            >
                <Typography variant="h3" component="h3" sx={{}}>
                    Section 5 - Sign In/ Sign Up (leads to basic dashboard)
                </Typography>
            </Grid2>
            {/* <Grid2 xs={12}>
                <SignInSide sx={{}} />
            </Grid2> */}
        </Grid2>
    );
};

export default Section6;
