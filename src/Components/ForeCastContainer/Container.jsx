import React, { useEffect, useState } from "react";
import "./Container.scss";
import { Skeleton } from "@mui/material";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Plot from "react-plotly.js";

import { TemperatureGraph } from "../Temperature-Graph/TempPlot";

const Container = ({ hoursData, loading, error, toggle }) => {
  const [hourlyData, setHourlyData] = useState([]);
  const [hours, setHours] = useState([]);
  const [temps, setTemps] = useState([]);

  useEffect(() => {
    if (hoursData && !loading && !error) {
      const now = new Date();
      const currentHour = now.getHours();
      let index = 0;

      const hourlyForecast = hoursData[index]?.hour
        ?.filter((item) => {
          const itemHour = new Date(item?.time).getHours();
          return itemHour >= currentHour;
        })
        .slice(0, 5);

      const nextDayHourlyForecast = hoursData[index + 1]?.hour
        ?.filter((nextItem) => {
          const nextDayHour = new Date(nextItem?.time).getHours();
          return nextDayHour >= 0;
        })
        .slice(0, 4);

      let finalArr;
      if (currentHour >= 20) {
        finalArr = hourlyForecast.concat(nextDayHourlyForecast).slice(0, 5);
      } else {
        finalArr = hourlyForecast.slice(0, 5);
      }

      setHourlyData(finalArr);

      const temperatures = finalArr.map((item) => Math.floor(item?.temp_c));
      const times = finalArr.map((item) => new Date(item?.time).getHours());

      setHours(times);
      setTemps(temperatures);
    }
  }, [hoursData, loading, error]);

  const convertIntoHourMint = (dateTime) => {
    const time = new Date(dateTime);
    const hour = time.getHours();
    const mint = time.getMinutes();
    const Time = `${hour}:${mint < 10 ? `0${mint}` : mint}`;
    return Time;
  };

  return (
    <div className="forecast-container">
      {loading ? (
        <Skeleton
        sx={
          toggle === "dark"
            ? { bgcolor: "#E2DFD2", marginLeft: "10px" }
            : {marginLeft: "10px"}
        }
          width={190}
          height={30}
        />
      ) : (
        <span
          className={`${
            toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
          } heading`}
        >
          Today's Forecast
        </span>
      )}
      
      <div className="containerItems">
        {hourlyData?.map((hour, index) => (
          <div key={index} className="containerItem">
            {loading ? (
              <Skeleton
              sx={
                toggle === "dark"
                  ? { bgcolor: "#E2DFD2" }
                  : null
              }
                width={70}
              />
            ) : (
              <span
                className={`${
                  toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                } temperature`}
              >
                {Math.floor(hour?.temp_c)}°C
              </span>
            )}
            {loading ? (
              <Skeleton
              sx={
                toggle === "dark"
                  ? { bgcolor: "#E2DFD2" }
                  : null
              }
                variant="circular"
                width={50}
                height={50}
              />
            ) : (
              <img
                className="image"
                src={hour?.condition?.icon}
                alt={hour?.condition?.text}
              />
            )}
            {loading ? (
              <Skeleton
              sx={
                toggle === "dark"
                  ? { bgcolor: "#E2DFD2" }
                  : null
              }
                width={70}
              />
            ) : (
              <span
                className={`${
                  toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                } time`}
              >
                {convertIntoHourMint(hour?.time)}
              </span>
            )}
          </div>
        ))}
        {/* <TemperatureGraph temperatureData={temps} hoursData={hours} /> */}
      </div>
      
    </div>
  );
};

export default Container;
