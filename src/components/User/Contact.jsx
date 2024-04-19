import React, { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    Card,
    CardContent,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useMutation } from "@apollo/client";
import { CONTACT_OBH } from "../../utils/mutations";
import { useForm } from "react-hook-form";

// THE DATA JUST NEEDS TO BE CONVETED INTO JSON AND SENT OUT AS AN EMAIL/ FASTER WAY THAN CLICKING THE EMAIL BUTTONS
// npm install react-hook-form react-hook-form-mui his looks like it adapt to our code better than the other one
const ContactObsidian = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [contactOBH] = useMutation(CONTACT_OBH);
    // const [formData, setFormData] = useState({
    //     firstname: "",
    //     lastname: "",
    //     email: "",
    //     phone: "",
    //     message: "",
    // });

    // const handleChange = (e) => {
    //     setcontactOBH({
    //         ...contactOBH,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    const onSubmit = async (data) => {
        // event.preventDefault();
        try {
            const { data: response } = await contactOBH({
                variables: { ...data },
            });
            console.log(response);
        } catch (error) {
            console.error(errors);
        }
    };

    return (
        <Grid2
            container
            md={12}
            sx={{
                justifyContent: "left",
                alignItems: "center",
                height: "87vh",
            }}
        >
            <Grid2 rowGap={1} xs={12} md={4} mdOffset={1.5} sx={{}}>
                <Card
                    elevation={22}
                    sx={{
                        backgroundColor: "primary.tertiary",
                        borderRadius: 2,
                        minHeight: "76dvh",
                    }}
                >
                    <CardContent sx={{ justifyContent: "center", pt: 3}}>
                        <Card
                            elevation={8}
                            sx={{ color: "#e8e8e8", borderRadius: 2, }}
                        >
                            <CardContent
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                    backgroundColor: "primary.main",
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    // component="div"
                                    sx={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        outline: 4,
                                        borderRadius: 2,
                                        px: 2,
                                        color: "primary.tertiary",
                                    }}
                                >
                                    Contact Obsidian
                                </Typography>
                            </CardContent>
                        </Card>
                        <br />{" "}
                        <Grid2
                            container
                            // spacing={1}
                            // gap={5}
                            sx={{ textAlign: "left", }}
                        >
                            <Grid2
                                container
                                component="form"
                                xs={12}
                                md={12}
                                // spacing={3}
                                gap={2}
                                sx={{ bgcolor: "" }}
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <Grid2
                                    container
                                    xs={12}
                                    md={4}
                                    // mdOffset={0.25}
                                    sx={{ bgcolor: "", color: "primary.main", borderRadius: 2 }}
                                >
                                    <Grid2
                                        component={TextField}
                                        {...register("firstname", {
                                            required: true,
                                        })}
                                        required
                                        md={12}
                                        // fullWidth
                                        id="firstname"
                                        label="First Name"
                                        name="firstname"
                                        autoComplete="firstname"
                                        value={contactOBH.firstname}
                                        onChange={(e) =>
                                            contactOBH({
                                                ...data,
                                                firstname: e.target.value,
                                            })
                                        }
                                        sx={{ }}
                                    />
                                </Grid2>
                                <Grid2
                                    container
                                    xs={12}
                                    md={4}
                                    // mdOffset={0.25}
                                    sx={{ bgcolor: "", borderRadius: 2 }}
                                >
                                    <Grid2
                                        component={TextField}
                                        {...register("lastname", {
                                            required: true,
                                        })}
                                        required
                                        md={12}
                                        // fullWidth
                                        id="lastname"
                                        label="Last Name"
                                        name="lastname"
                                        autoComplete="lastname"
                                        value={contactOBH.lastname}
                                        onChange={(e) =>
                                            contactOBH({
                                                ...contactOBH,
                                                lastname: e.target.value,
                                            })
                                        }
                                        sx={{ fontColor: "primary.main" }}
                                    />
                                </Grid2>
                                <Grid2 container xs={12} sm={12} mdOffset={0}>
                                    <Grid2
                                        component={TextField}
                                        {...register("email", {
                                            required: true,
                                        })}
                                        required
                                        md={6}
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        // size="small"
                                        value={contactOBH.email}
                                        onChange={(e) =>
                                            contactOBH({
                                                ...contactOBH,
                                                email: e.target.value,
                                            })
                                        }
                                        sx={{ bgcolor: "", borderRadius: 2 }}
                                    />
                                </Grid2>
                                <Grid2 container xs={12} sm={12} mdOffset={0}>
                                    <Grid2
                                        component={TextField}
                                        {...register("phone", {
                                            required: true,
                                        })}
                                        required
                                        md={6}
                                        id="phone"
                                        label="Phone Number"
                                        name="phone"
                                        autoComplete="phone number"
                                        value={contactOBH.phone}
                                        onChange={(e) =>
                                            contactOBH({
                                                ...contactOBH,
                                                phone: e.target.value,
                                            })
                                        }
                                        sx={{ bgcolor: "", borderRadius: 2 }}
                                    />
                                </Grid2>
                                <Grid2 container xs={12}>
                                    <Grid2
                                        component={TextField}
                                        {...register("message", {
                                            required: true,
                                        })}
                                        required
                                        md={10}
                                        id="message"
                                        label="Leave us a message"
                                        name="message"
                                        autoComplete="message"
                                        multiline
                                        rows={3}
                                        value={contactOBH.message}
                                        onChange={(e) =>
                                            contactOBH({
                                                ...contactOBH,
                                                message: e.target.value,
                                            })
                                        }
                                        sx={{ bgcolor: "", borderRadius: 2 }}
                                    />
                                </Grid2>
                                {/* <Grid2 xs={12}>
                                    <TextField
                                        required
                                        id="message"
                                        variant="filled"
                                        label="This textfield is 3 lines deep"
                                        name="message"
                                        autoComplete="message"
                                        multiline
                                        rows={3}
                                        value={contactOBH.message}
                                        // onChange={handleChange}
                                        sx={{ display: "none", width: "75%" }}
                                    />
                                </Grid2>
                                <Grid2 xs={12}>
                                    <TextField
                                        required
                                        // fullWidth
                                        id="message"
                                        label="This textfield is 4 lines deep"
                                        variant="standard"
                                        name="message"
                                        autoComplete="message"
                                        multiline
                                        rows={4}
                                        value={contactOBH.message}
                                        // onChange={handleChange}
                                        sx={{ display: "none", width: "75%" }}
                                    />
                                </Grid2> */}
                                <Grid2
                                    container
                                    columnSpacing={1}
                                    sx={{ textAlign: "center" }}
                                >
                                    <Grid2
                                        // xs={12}
                                        sx={
                                            {
                                                // display: "flex",
                                                // alignContent: "left",
                                                // justifyContent: "left",
                                            }
                                        }
                                    >
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                            onSubmit={handleSubmit(onSubmit)}
                                        >
                                            Submit
                                        </Button>
                                    </Grid2>
                                    <Grid2
                                        // xs={12}
                                        sx={
                                            {
                                                // display: "flex",
                                                // alignContent: "left",
                                                // justifyContent: "left",
                                            }
                                        }
                                    >
                                        <Button
                                            component="a"
                                            type="submit"
                                            fullWidth
                                            variant="outlined"
                                            href={`mailto:placeholder@email.com`}
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Email Us
                                        </Button>
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </CardContent>
                </Card>
            </Grid2>
            <Grid2>
				{/* great place for a couple pictures or text about contacting OBH */}
            </Grid2>
        </Grid2>
    );
};

export default ContactObsidian;
