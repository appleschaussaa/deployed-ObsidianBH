import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2";
import Icon from "@mdi/react";
import { mdiGlassMug } from "@mdi/js";

function HeaderNav({ isOver21 }) {
    // const BASE_URL =
    //     import.meta.env.BASE_URL ||
    //     "https://appleschaussaa.github.io/";

    // const onTapUrl = `${BASE_URL}ontap`;
    // const contactUrl = `${BASE_URL}contact`;
    // const clientUrl = `${BASE_URL}signin`;
    // const brainstormUrl = `${BASE_URL}brainstorm`;

    return (
        <Grid2
            container
            sx={{
                alignItes: "center",
                height: "8dvh",
                justmifyContent: "center",
                backgroundColor: "primary.main",
                color: "primary.secondary",
                m: 0,
            }}
        >
            <Grid2
                md={6}
                mdOffset={0.25}
                sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    alignContent: "right",
                    p: 0.5,
                }}
            >
                <Icon path={mdiGlassMug} size={2} />
                {isOver21 ? (
                    <Typography
                        variant="h3"
                        fontWeight={"400"}
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            color: "inherit",
                            textDecoration: "underline",
                        }}
                    >
                        OBSIDIAN
                    </Typography>
                ) : (
                    <Typography
                        variant="h3"
                        fontWeight={"400"}
                        noWrap
                        sx={{
                            color: "inherit",
                            textDecoration: "underline",
                        }}
                    >
                        OBSIDIAN
                    </Typography>
                )}
            </Grid2>
            <Grid2
                md={4}
                mdOffset={0.25}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                }}
            >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Grid2
                    sx={{
                        display: { xs: "none", md: "flex" },
                    }}
                >
                    {/* <Button
                        component={Link}
                        to={onTapUrl}
                        sx={{
                            my: 2,
                            color: "primary.tertiary",
                            // display: "none",
                            textDecoration: "underline",
                            "&:hover": {
                                textDecoration: "overline",
                            },
                        }}
                    >
                        On Tap
                    </Button> */}

                    <Button
                        component={Link}
                        to="/contact"
                        sx={{
                            my: 2,
                            color: "primary.tertiary",
                            // display: "none",
                            textDecoration: "underline",
                            "&:hover": {
                                textDecoration: "overline",
                            },
                        }}
                    >
                        Contact US
                    </Button>
                    {/* <Button
                        component={Link}
                        to={brainstormUrl}
                        sx={{
                            my: 2,
                            color: "primary.tertiary",
                            display: "none",
                            textDecoration: "underline",
                            "&:hover": {
                                textDecoration: "overline",
                            },
                        }}
                    >
                        Brainstorming
                    </Button> */}
                </Grid2>
            </Grid2>
            <Grid2 md={0}></Grid2>
        </Grid2>
    );
}

export default HeaderNav;
