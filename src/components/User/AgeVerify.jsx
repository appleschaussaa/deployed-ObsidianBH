import React, { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography, Button, Box, Link, Card } from "@mui/material";
import ObsidianLogo from "../../assets/ObsidianBHlogo.png";
import { useNavigate, useSearchParams } from "react-router-dom";

const AgeVerify = ({ onVerify }) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const below21 = searchParams.get("below21") === "true";

    const handleClick = (isOver21) => {
        onVerify(isOver21);
        if (!isOver21) {
            navigate("/?below21=true");
        }
    };

    return (
        <Grid2
            container
            md={12}
            sx={{
                flexDirection: "column",
                height: "100dvh",
                justifyContent: "center",
                alignContent: "center",
                backgroundColor: "hsl(60, 1%, 73%)",
            }}
        >
            <Grid2 container sx={{ 
                textAlign: "center",
                height: "54dvh",
                 }}>
                <Grid2
                    md={12}
                    // mdOffset={5}
                    component={Card}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "45dvh",
                        backgroundImage: `url(${ObsidianLogo})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: 2,
                    }}
                ></Grid2>
                <Grid2 md={12} mdOffset={0} component={Typography} variant="h4" fontWeight={500}>
                    {below21 ? "You must be 21 or older to enter this site." : "Are you 21 or older?"}
                </Grid2>
            </Grid2>
            {!below21 && (
            <Grid2
                container
                md={3}
                columnGap={1}
                sx={{
                    height: "5dvh",
                    justifyContent: "center",
                    textAlign: "center",
                    
                }}
            >
                <Grid2
                    md={2}
                    component={Button}
                    variant="contained"
                    onClick={() => handleClick(true)}
                    sx={{ bgcolor: "primary.secondary" }}
                >
                    <Grid2 component={Typography} variant="h6">
                        Yes
                    </Grid2>
                </Grid2>
                <Grid2
                    md={2}
                    component={Button}
                    variant="contained"
                    onClick={() => handleClick(false)}
                >
                    <Grid2 component={Typography} variant="h6">
                        No
                    </Grid2>
                </Grid2>
            </Grid2>
            )}
        </Grid2>
    );
};

export default AgeVerify;
