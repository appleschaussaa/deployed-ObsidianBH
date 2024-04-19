import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";
import theme from "./utils/Theme";
import HomePage from "./pages/HomePage";
// import OnTap from "./pages/OnTapPage";
// import Brainstorm from "./components/sectionComponents/Brainstorm";
import Footer from "./components/Navigation/Footer";
import HeaderNav from "./components/Navigation/Header";
// import ContactObsidian from "./components/User/Contact";
import Grid2 from "@mui/material/Unstable_Grid2";
import AgeVerify from "./components/User/AgeVerify";

const ContactObsidian = lazy(() => import("./components/User/Contact"));

function App() {
    const httpLink = createHttpLink({
        uri:
            "/graphql" ||
            "http://localhost:5173/graphql" 
            // ||
            // "https://appleschaussaa.github.io/Obsidian-Beerhall/" ||
            // "https://obsidian-beerhall-f463b54244d7.herokuapp.com/",
    });

    const client = new ApolloClient({
        link: httpLink,
        // uri: "/graphql" || "http://localhost:5173/Obsidian-Beerhall/contact",
        cache: new InMemoryCache(),
    });
    const [isOver21, setIsOver21] = useState(null);

    useEffect(() => {
        const savedIsOver21 = localStorage.getItem("isOver21");
        if (savedIsOver21 !== null) {
            setIsOver21(savedIsOver21 === "true");
        }
    }, []);

    const handleAgeVerify = (value) => {
        localStorage.setItem("isOver21", value.toString());
        setIsOver21(value);
    };

    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Grid2
                        container
                        rowSpacing={0}
                        rowGap={0}
                        sx={{
                            scrollbarWidth: "none",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "primary.secondary",
                            m: 0,
                            p: 0,
                        }}
                    >
                        <Grid2 container md={2} sx={{ justifyContent: "end" }}>
                            {/* <Button
                                variant="contained"
                                color="inherit"
                                sx={{
                                    position: "fixed",
                                    // zIndex: 3,
                                    bottom: 20,
                                    right: 20,
                                    justifyContent: "end",
                                    
                                }}
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                
                                Back to top
                            </Button> */}
                        </Grid2>
                        <Grid2
                            container
                            rowSpacing={0}
                            rowGap={0}
                            md={12}
                            sx={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Grid2
                                xs={12}
                                md={12}
                                sx={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {isOver21 !== null && (
                                    <HeaderNav isOver21={isOver21} />
                                )}
                            </Grid2>
                        </Grid2>
                        <Grid2 container xs={12} sx={{}}>
                            <Grid2
                                rowSpacing={0}
                                rowGap={0}
                                md={12}
                                sx={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Routes>
                                    {isOver21 === null ? (
                                        <Route
                                            path="/*"
                                            element={
                                                <AgeVerify
                                                    onVerify={handleAgeVerify}
                                                />
                                            }
                                        />
                                    ) : (
                                        <>
                                            <Route
                                                path="/"
                                                element={<HomePage />}
                                            />
                                            <Route
                                                path="/Obsidian-Beerhall"
                                                element={<HomePage />}
                                            />
                                            {/* <Route
                                                path="/ontap"
                                                element={<OnTap />}
                                            /> */}
                                            <Route
                                                path="/contact"
                                                element={
                                                    <Suspense
                                                        fallback={
                                                            <div>
                                                                Loading...
                                                            </div>
                                                        }
                                                    >
                                                        <ContactObsidian />
                                                    </Suspense>
                                                }
                                            />
                                            <Route
                                                path="/Obsidian-Beerhall/contact"
                                                element={
                                                    <Suspense
                                                        fallback={
                                                            <div>
                                                                Loading...
                                                            </div>
                                                        }
                                                    >
                                                        <ContactObsidian />
                                                    </Suspense>
                                                }
                                            />
                                            {/* <Route
                                                path="/brainstorm"
                                                element={<Brainstorm />}
                                            /> */}
                                        </>
                                    )}
                                </Routes>
                            </Grid2>
                        </Grid2>
                        <Grid2
                            container
                            xs={12}
                            sx={{
                                alignItems: "right",
                            }}
                        >
                            <Grid2
                                xs={12}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "right",
                                }}
                            >
                                {isOver21 !== null && <Footer />}
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Router>
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default App;
