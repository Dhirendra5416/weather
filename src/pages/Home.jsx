import React, { useState, useEffect } from "react";
import axios from "axios";
import BackgroundImage from "../components/molecules/BackgroundImage";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Container,
  CircularProgress,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WeatherCard from "../components/molecules/WeatherCard";
import SearchAppBar from "../components/atom/Searchbar";
import Footer from "../components/organisms/footer";

const Home = () => {
  const [city, setCity] = useState("Delhi");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function getCurrentAndSixDaysLaterDate() {
    const currentDate = new Date();
    const sixDaysLaterDate = new Date(currentDate);
    sixDaysLaterDate.setDate(currentDate.getDate() + 6);

    return [
      currentDate.toISOString().split("T")[0],
      sixDaysLaterDate.toISOString().split("T")[0],
    ];
  }


  const [currentDate, sixDaysLaterDate] = getCurrentAndSixDaysLaterDate();
  const baseUrl = process.env.REACT_APP_API_URL
  const keyValue = process.env.REACT_APP_API_KEY;
 
  const fetchData = async (city) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${baseUrl}?&city=${city}&start_date=2024-03-1&end_date=${currentDate}&key=${keyValue}&tp=daily`
      );
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Function to handle search
    const searchCity = document.getElementById("cityInput").value;
    setCity(searchCity);
  };

  useEffect(() => {
    fetchData(city); // Fetch data on component mount
  }, [city]); // Trigger useEffect when city changes

  return (
    <>
      {loading ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{
            height: "100vh",
            background: "#f0f0f0", // Background color
          }}
        >
          <CircularProgress size={80} thickness={4} color="primary" />
        </Grid>
      ) : (
        <>
          <BackgroundImage>
            <div style={{ position: "relative", height: "100vh" }}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{ height: "100%" }}
              >
                <Grid item xs={12} sm={8} md={6} lg={4}>
                  <Typography variant="h4" align="center" gutterBottom>
                    Weather Forecasting
                  </Typography>
                  <SearchAppBar
                    title={"Search"}
                    id={"cityInput"}
                    label={"Enter city"}
                    onClick={handleSearch}
                  />
                </Grid>
              </Grid>
            
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  textAlign: "center",
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                      color: "#000",
                    },
                    transition: "background-color 0.3s, color 0.3s",
                  }}
                >
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      {/* First row: Icon */}
                      <Grid item xs={12}>
                        <LocationOnIcon fontSize="large" />
                      </Grid>
                      {/* Second row: Text */}
                      <Grid item xs={12}>
                        <Box>
                          <Typography variant="h6">
                            {data?.city_name}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {data?.country_code}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </div>
            </div>
          </BackgroundImage>
          <Box
        sx={{
          backgroundColor: "#f5f5f5", // Light grey background color
          padding: "20px", // Add padding for spacing
          borderRadius: "5px", // Add border radius for rounded corners
        }}
      >
          <Container maxWidth="xl">
          
            <Grid container spacing={2}>
              {data.data.map((val, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  <WeatherCard
                    temperature={val.temp}
                    day={val.date}
                    radiation={val.t_solar_rad}
                    Sunhours={val.sun_hours}
                    windspeed={val.wind_spd}
                    windDirection={val.wind_dir}
                  />
                </Grid>
              ))}
            </Grid>
            
          </Container>
         <Footer/>
          </Box>
        </>
      )}
    </>
  );
};

export default Home;
