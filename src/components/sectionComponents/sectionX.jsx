import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import ObsidianSign from "../../assets/obsidian-sign.jpg";

const SectionX = () => {

    return (
        <Grid2
            container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100dvh",
                m: 0,
                padding: 0,
                backgroundImage: `url(${ObsidianSign})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: { xs: "45% top", lg: "center center" },
                backgroundAttachment: "fixed",
            }}
        ></Grid2>
    );
};

export default SectionX;
