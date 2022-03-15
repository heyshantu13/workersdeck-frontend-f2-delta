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
} from "@mui/material/";
import customStyle from "./style";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import "./style.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BookService } from "./serviceSlice";
import Loader from "../../components/Loader";
import ServiceDetail from "../../components/Card/ServiceDetail";
import WDServiceList from "../../services/list.service";

const ServiceList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    const [visible, setVisible] = useState({
        loading:false,
        visibled:false,
    });
    const [serviceinfo,setServiceinfo] = useState({});
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

    const handleViewMore = async (service,e) => {
        const { id } = e.target;
        setLoadingId((ids) => ({
            ...ids,
            [id]: true,
        }));
        setVisible({
            visibled: false
        })
      WDServiceList.fetchServiceInfo(service.id).then((data) => {
        setServiceinfo(data);
        setLoadingId((ids) => ({
            ...ids,
            [id]: false,
        }));
      }).catch((err) => {
        setServiceinfo(err);
      }).finally(() => {
        setVisible({
            loading: false,
            visibled: true
        })
      })

    }

    return (
        <>
{/* Sub categories */}
  <Grid container>

    <Grid item  xs={12} sm={12} lg={12} >
        <Card  className={classes.ThirdCard} style={{overflow: 'auto'}}>
            <Stack direction="row" spacing={2} m={1} justifyContent="center" p={1} >
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

    <Grid item  xs={12} sm={12} lg={7} >
    {serviceResult.services.map((service, i) => ( 
        <Container maxWidth="xl" className={classes.wd_myprofile_layout} key={i}>
              <Card className={classes.ServiceCard}>
              
              <Grid container>
                  {/* Image  */}
                  <Grid item xs={12} sm={12} md={5} lg={5} mt={3}>
                      <img
                      src={service.service_image}
                      className={classes.services_img}
                      loading="lazy"
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
                               <Loader size={25} thickness={6} color={"#ffffff"}/>
                          ) : (
                              "Book Service"
                          )}
                      </Button>
                      <Button variant="outlined" 
                      className={classes.viewService} 
                      id={`v_${service.id}`}
                      onClick={(e) =>
                          handleViewMore(service, e)
                      }
                      >
                              {loadingId[`v_${service.id}`] ? 
            <Loader size={25} thickness={6} color={"#3F51B5"}/>
            : "View Details" }
                         </Button>
                  </Grid>
                  {/* end book button */}
              </Grid>
              
              </Card>
        </Container>
    ))}
    </Grid>

    <Grid item xs={12} sm={12} lg={5}>
        {visible.visibled && 
             <ServiceDetail data={serviceinfo} handleBooking={handleBooking} loadingId={loadingId} />
        }
    </Grid>

</Grid>
{/* Sub Categories end */}


        </>
    );
};

export default ServiceList;
