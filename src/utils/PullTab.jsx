// import React, { useState } from "react";
// import {
//     Typography,
//     ImageList,
//     ImageListItem,
//     ImageListItemBar,
//     IconButton,
//     Button,
//     Card,
// } from "@mui/material";
// import Grid2 from "@mui/material/Unstable_Grid2";
// import InfoIcon from "@mui/icons-material/Info";
// import Marquee from "react-fast-marquee";
// import { beerData, altItems, nonAlc } from "../utils/OnTapData";
// import FullDrinkList from "../components/Reusable/MuiImageList";
// const OnTabPull = () => {
//     const [showAllBeers, setShowAllBeers] = useState(false);
//     const [showAllAlt, setShowAllAlt] = useState(false);
//     const [showAllNonAlc, setShowAllNonAlc] = useState(false);
//     useState("");

//     const beersDisplayed = beerData.slice(0, 3);
//     const altDrinks = altItems.slice(0, 3);
//     const nonAlcDrinks = nonAlc.slice(0, 3);

//     const displayedTitles = [
//         "Current Beers",
//         "Available Alternatives",
//         "Non-Alcoholic choices",
//     ];
//     const displayedLists = [beersDisplayed, altDrinks, nonAlcDrinks];

//     return (
//         <Grid2
//             container
//             rowSpacing={0}
//             md={11}
//             mdOffset={0.25}
//             sx={{ display: "flex", height: "87dvh" }}
//         >
//             <Grid2 container rowSpacing={0} xs={12} md={7} sx={{}}>
//                 <Grid2
//                     container
//                     md={11}
//                     rowSpacing={3}
//                     sx={{
//                         height: "80dvh",
//                         pt: 3,
//                     }}
//                 >
//                     {displayedLists.map((list, index) => (
//                         <Grid2>
//                             <Grid2 component={Typography} variant="h5" md={12}>
//                                 {displayedTitles[index]}
//                             </Grid2>

//                             <Grid2
//                                 component={ImageList}
//                                 key={index}
//                                 md={12}
//                                 sx={{ 
//                                     // flex: 0.75, 
//                                     my: 0 
//                                 }}
//                                 cols={3}
//                             >
//                                 {list.map((item, i) => (
//                                     <Grid2 component={ImageListItem} key={i}>
//                                         <img
//                                             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                                             src={`${item.img}?w=248&fit=crop&auto=format`}
//                                             alt={item.title}
//                                             loading="lazy"
//                                             style={{
//                                                 height: "17dvh",
//                                                 // objectFit: "cover",
//                                                 // objectFit: "cover",
//                                                 objectFit: "contain",
//                                                 // position: "center",
//                                             }}
//                                         />
//                                         <ImageListItemBar
//                                             title={
//                                                 item.name
//                                                     ? `${item.title} by: ${item.name}`
//                                                     : item.title
//                                             }
//                                             name={item.name}
//                                             actionIcon={
//                                                 <IconButton
//                                                     sx={{
//                                                         color: "rgba(255, 255, 255, 0.54)",
//                                                         p: 0,
//                                                     }}
//                                                     aria-label={`info about ${item.title}`}
//                                                 >
//                                                     <InfoIcon />
//                                                 </IconButton>
//                                             }
//                                             // disableGutters={true}
//                                             sx={{ height: "15%" }}
//                                         ></ImageListItemBar>
//                                     </Grid2>
//                                 ))}
//                             </Grid2>
//                         </Grid2>
//                     ))}
//                     {!showAllBeers && (
//                         <Button
//                             onClick={() => {
//                                 setShowAllBeers(true);
//                                 setActiveList("beers");
//                             }}
//                         >
//                             Show More
//                         </Button>
//                     )}
//                     {showAllBeers && (
//                         <Button onClick={() => setShowAllBeers(false)}>
//                             Show Less
//                         </Button>
//                     )}
//                 </Grid2>
//             </Grid2>
//             <Grid2
//                 container
//                 xs={12}
//                 md={5}
//                 sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignContent: "center",
//                     maxHeight: "80dvh",
//                 }}
//             >
//                 <Grid2 component={Card} md={10} sx={{ maxHeight: "80%" }}>
//                     <FullDrinkList
//                         showAllBeers={showAllBeers}
//                         showAllAlt={showAllAlt}
//                         showAllNonAlc={showAllNonAlc}
//                     />
//                 </Grid2>
//             </Grid2>
//             <Grid2 xs={12} md={12}>
//                 <Marquee>
//                     <Typography variant="body1" fontWeight={600}>
//                         *All beers are subject to change... try them all while
//                         they last!!!
//                     </Typography>
//                 </Marquee>
//             </Grid2>
//         </Grid2>
//     );
// };

// export default OnTabPull;
