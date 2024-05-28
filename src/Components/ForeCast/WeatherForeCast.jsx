import React, { useState } from "react";
import "./WeatherForecast.scss";
import { Skeleton } from "@mui/material";
import Container from "../ForeCastContainer/Container";

const WeatherForeCast = (props) => {
  const { data, loading, error, toggle } = props;


  return (
    <div className={`${toggle === "dark" ? "dark-bg" : "bg-white"} hourly-forecast`}>
      <Container toggle={toggle} loading={loading} error={error} hoursData={data?.forecastday} />
    </div>
  );
};

export default WeatherForeCast;
