import React, { useState, useEffect } from "react";
import {
    ImageList,
    ImageListItem,
    ImageListItemBar,
    IconButton,
    Card,
    CardMedia,
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
    const [hoverCard, setHoverCard] = useState(null);

    return (
        <Grid2
            container
            sx={{
                width: { xs: "88%", lg: "70%" },
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
                                px: .80,
                                py: .25,
                                filter:
                                    hoverCard !== null && hoverCard !== index
                                        ? "blur(1px) brightness(0.6) contrast(0.7)"
                                        : "none",
                            }}
                            onMouseEnter={() => setHoverCard(index)}
                            onMouseLeave={() => setHoverCard(null)}
                        >
                            <CardMedia
                                component="img"
                                image={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                sx={{
                                    height: {
                                        xs: "105px",
                                        sm: "85px",
                                        md: "185px",
                                        lg: "215px",
                                        xl: "225px",
                                    },
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                    outline: "3px solid white",
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
                                        {/* <InfoIcon /> */}
                                    </IconButton>
                                }
                                sx={{
                                    alignContent: "center",
                                    width: "90%",
                                    position: "absolute",
                                    bottom: 0,
                                    left: "5%",
                                    height: {
                                        xs: "20px",
                                        sm: "30px",
                                        md: "40px",
                                        lg: "30px",
                                        xl: "35px",
                                    },
                                }}
                            />
                        </Grid2>
                    ))}
                </Marquee>
            </Card>
        </Grid2>
    );
};

export default CardList;
