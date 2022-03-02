import React, { useState } from "react";
import {
    Box,
    Grid,
    Button,
    Typography,
    Card,
    Container,
    Paper,
    Rating,
    Stack,
    CircularProgress,
} from "@mui/material/";
import customStyle from "./style";
import muistyle from "../../assets/mui_style";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import "./style.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BookService } from "./serviceSlice";

const ServiceList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    const [visible, setVisible] = useState(false);
    const [loadingId, setLoadingId] = useState({});

    const notify = (msg) =>
        toast.error(msg, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });

    const classes = customStyle();
    const serviceResult = useSelector((state) => state.services.data);

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

    const handleBooking = async (service, e) => {
        const { id } = e.target;
        if (!isLoggedIn) {
            notify("Please Login First To Complete Booking");
            navigate("/login");
        } else {
            setLoadingId((ids) => ({
                ...ids,
                [id]: true,
            }));

            try {
                await dispatch(BookService({ service }));
                setTimeout(() => {
                    navigate("/select-address");
                }, 500);
            } catch (e) {
                notify("Something Went Wrong");
                setLoadingId((ids) => ({
                    ...ids,
                    [id]: false,
                }));
            }
        }
    };

    return (
        <>
            <Grid container>
                {/* Sub categories */}
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>
                        <Card lg={12} sm={4} className={classes.ThirdCard}>
                            <Stack direction="row" spacing={2} mt={2}>
                                {serviceResult.subcategories.map(
                                    (subcat, i) => (
                                        <Item
                                            spacing={2}
                                            key={i}
                                            className={`${
                                                classes.wdSubcategories
                                            } ${
                                                !i
                                                    ? classes.wdSubcategoriesActive
                                                    : ""
                                            }`}
                                        >
                                            {subcat.name}
                                        </Item>
                                    )
                                )}
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
                {/* Sub Categories end */}
                <Grid item xs={12} sm={12} md={7} lg={7}>
                    {/* Show service Card Here */}
                    {serviceResult.services.map((service, i) => (
                        <Container
                            maxWidth="xl"
                            className={classes.wd_myprofile_layout}
                            key={i}
                        >
                            <Card
                                lg={12}
                                sm={12}
                                className={classes.ServiceCard}
                            >
                                <Grid container>
                                    {/* Image  */}
                                    <Grid item xs={12} sm={12} md={5} lg={5}>
                                        <Box
                                            component="img"
                                            mt={3}
                                            sx={{
                                                height: 180,
                                                width: 300,
                                                maxHeight: { xs: 233, md: 182 },
                                                maxWidth: { xs: 350, md: 300 },
                                                marginLeft: "2rem",
                                            }}
                                            src={service.service_image}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={7}
                                        lg={7}
                                        pr={1}
                                    >
                                        <Typography
                                            varient="h4"
                                            className={classes.wdServiceCardh1}
                                            mt={2}
                                            ml={5}
                                        >
                                            {service.service_name}
                                        </Typography>
                                        <Typography
                                            varient="subtitle1"
                                            className={
                                                classes.wdServiceCardSubtitle
                                            }
                                            mt={1}
                                            ml={5}
                                        >
                                            {service.service_description}{" "}
                                            Opening Time -{" "}
                                            <b>{service.start_time}</b> and
                                            estimate Time -{" "}
                                            <b>{service.estimate_time}</b> Mins.
                                        </Typography>

                                        <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            lg={12}
                                        >
                                            <Rating
                                                name="read-only"
                                                value={5}
                                                readOnly
                                                className={classes.wdRating}
                                            />
                                        </Grid>
                                        <span
                                            className={classes.servicePricing}
                                        >
                                            &#x20B9; {service.service_charge}
                                        </span>
                                    </Grid>
                                    {/* Image end */}
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <Button
                                            variant="contained"
                                            className={classes.bookService}
                                            onClick={(e) =>
                                                handleBooking(service, e)
                                            }
                                            id={service.id}
                                            mb={1}
                                        >
                                            {loadingId[service.id] ? (
                                                <CircularProgress
                                                    size={30}
                                                    thickness={8}
                                                    sx={{
                                                        color: "#ffffff",
                                                    }}
                                                />
                                            ) : (
                                                "Book Service"
                                            )}
                                        </Button>
                                    </Grid>
                                    {/* end book button */}
                                </Grid>
                            </Card>
                        </Container>
                    ))}
                    {/* End Service Card Here */}
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}></Grid>
                {visible && <h1>This is visible</h1>}
            </Grid>
        </>
    );
};

export default ServiceList;
