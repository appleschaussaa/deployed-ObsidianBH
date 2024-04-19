// import * as React from "react";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
// import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// import { beerData, altItems, nonAlc } from "../../utils/OnTapData";

// export default function FullDrinkList({ showAllBeers, showAllAlt, showAllNonAlc }) {
//     const beerItems = showAllBeers ? beerData.slice(3) : [];
//     const altDrinks = showAllAlt ? altItems.slice(3) : [];
//     const nonAlcItems = showAllNonAlc ? nonAlc.slice(3) : [];

//     const items = [...beerItems, ...altDrinks, ...nonAlcItems];

//     return (
//         <Grid2 component={ImageList} disableEqualOverflow sx={{ width: "auto", height: "85dvh" }}>
//             {items.map((item) => (
//                 <Grid2 component={ImageListItem} disableEqualOverflow key={item.img}>
//                     <Grid2
//                         component="img"
//                         srcSet={`${item.img}`}
//                         src={`${item.img}`}
//                         alt={item.title}
//                         loading="lazy"
//                         sx={{ width: "100%", height: "100%" }}
//                     />
//                     <Grid2
//                         component={ImageListItemBar}
//                         title={item.title}
//                         subtitle={<span>Brewed by: {item.name}</span>}
//                         position="below"
//                         sx={{ fontSize: "50%",}}
//                     />
//                 </Grid2>
//             ))}
//         </Grid2>
//     );
// }
