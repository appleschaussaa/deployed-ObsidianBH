import React, { useState, useEffect } from "react";
import {
    ImageList,
    ImageListItem,
    ImageListItemBar,
    IconButton,
    Card,
} from "@mui/material";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
// import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Grid2 from "@mui/material/Unstable_Grid2";
// import OakBarBackground from "../../images/wood-background.jpg";
// import ObsidianPavement from "../../images/obsidian-pavement.png";
import Marquee from "react-fast-marquee";
import { beerData } from "../../utils/OnTapData";

const CardList = () => {
    return (
        <Grid2
            container
            sx={{
                width: "70%",
                borderRadius: 5,
            }}
        >
            <Card
                elevation={2}
                sx={{
                    display: "flex",
                    pl: 1,
                    background: "inherit",
                }}
            >
                <Marquee gradient={false} speed={40} pauseOnHover={true}>
                    {beerData.map((item, index) => (
                        <Grid2
                            component={ImageListItem}
                            key={index}
                            columnGap={0}
                            sx={{
                                flex: "0 0 auto",
                                // mx: 1,
                                p: 1,
                            }}
                        >
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    height: "225px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                    outline: "2px solid white",
                                }}
                            />
                            <ImageListItemBar
                                title={item.title}
                                actionIcon={
                                    <IconButton
                                        sx={{
                                            color: "rgba(255, 255, 255, 0.54)",
                                        }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </Grid2>
                    ))}
                </Marquee>
            </Card>
        </Grid2>
    );
};

export default CardList;
