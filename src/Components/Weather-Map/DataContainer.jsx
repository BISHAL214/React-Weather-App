import { Divider, Hidden, Skeleton } from "@mui/material";
import React, { useState } from "react";
import HourForeCastFull from "./HourForeCastFull";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Map.scss"

const DataContainer = ({
  data,
  loading,
  error,
  lat,
  long,
  toggle,
  dark,
  light,
  ref
}) => {
  function convertCoordinateToDMS(coordinate, isLatitude) {
    const absoluteCoordinate = Math.abs(coordinate);
    const degrees = Math.floor(absoluteCoordinate);
    const minutesFloat = (absoluteCoordinate - degrees) * 60;
    const minutes = Math.floor(minutesFloat);
    const seconds = Math.round((minutesFloat - minutes) * 60);

    const direction = isLatitude
      ? coordinate >= 0
        ? "N"
        : "S"
      : coordinate >= 0
      ? "E"
      : "W";

    return `${direction}${degrees}°${minutes}'${seconds}"`;
  }

  const [index, setIndex] = useState(0);

  function convertCoordinatesToDMS(latitude, longitude) {
    const latitudeDMS = convertCoordinateToDMS(latitude, true);
    const longitudeDMS = convertCoordinateToDMS(longitude, false);

    return `${latitudeDMS}, ${longitudeDMS}`;
  }

  const localTime = new Date(
    data?.forecast?.forecastday[index]?.date
  ).toString();
  const IST = new Date(localTime);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthIndex = IST.getMonth();
  const date = IST.getDate();
  const year = IST.getFullYear();

  const monthName = monthNames[monthIndex];

  return (
    <div className="info-container">
      <div className="flex flex-col max-sm:w-[80vw] max-lg:w-[40vw] max-xl:w-[35vw] gap-2.5 pl-2.5 pt-2.5 pr-2.5 xl:pl-4 xl:pt-4">
        {loading ? (
          <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : { bgcolor: "#3333333" }
            }
            width={170}
          />
        ) : (
          <span
            className={`text-xl ${
              toggle === "dark" ? dark.color : light.color
            } font-thin`}
          >
            About The Location
          </span>
        )}
        {loading ? (
          <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : { bgcolor: "#3333333" }
            }
            width={150}
          />
        ) : (
          <span
            className={`${
              toggle === "dark" ? dark.color : light.color
            } font-thin`}
          >
            {convertCoordinatesToDMS(lat, long)}
          </span>
        )}
        {loading ? (
          <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : { bgcolor: "#3333333" }
            }
            width={100}
          />
        ) : (
          <span
            className={`${
              toggle === "dark" ? dark.color : light.color
            } font-thin`}
          >
            {data?.location?.name}
          </span>
        )}
        {loading ? (
          <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : { bgcolor: "#3333333" }
            }
            width={110}
          />
        ) : (
          <span
            className={`${
              toggle === "dark" ? dark.color : light.color
            } font-thin`}
          >
            {data?.location?.tz_id}
          </span>
        )}
        {loading ? (
          <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : { bgcolor: "#3333333" }
            }
            width={100}
          />
        ) : (
          <span
            className={`${
              toggle === "dark" ? dark.color : light.color
            } font-thin`}
          >{`${monthName} ${date} ${year}`}</span>
        )}
        {loading ? (
          <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : { bgcolor: "#3333333" }
            }
            width={140}
          />
        ) : (
          <span
            className={`${
              toggle === "dark" ? dark.color : light.color
            } font-thin`}
          >{`Sunrise: ${data?.forecast?.forecastday[index]?.astro?.sunrise}`}</span>
        )}
        {loading ? (
          <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : { bgcolor: "#3333333" }
            }
            width={140}
          />
        ) : (
          <span
            className={`${
              toggle === "dark" ? dark.color : light.color
            } font-thin`}
          >{`Sunset: ${data?.forecast?.forecastday[index]?.astro?.sunset}`}</span>
        )}
      </div>
      <Divider
        sx={{ bgcolor: "#fff", position: "relative", top: "10px" }}
        orientation="vertical"
        variant="middle"
        flexItem
      />
      <div className="min-w-[80vw] flex justify-start items-start">
        <button
          className={`${index === 0 ? "hidden" : "inline-block"} pl-1 pt-5`}
          onClick={(e) => (index > 0 ? setIndex((index) => index - 1) : null)}
        >
          <ArrowBackIcon
            sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: toggle === "dark" ? "white" : "#333333" }}
          />
        </button>
        <HourForeCastFull
          toggle={toggle}
          dark={dark}
          light={light}
          data={data}
          index={index}
          loading={loading}
          error={error}
        />
        <button
          className={`${index === 6 ? "hidden" : "inline-block pt-5"}`}
          onClick={(e) => (index < 6 ? setIndex((index) => index + 1) : null)}
        >
          <ArrowForwardIcon
            sx={{ display: "flex", justifyContent: "center", color: toggle === "dark" ? "white" : "#333333" }}
          />
        </button>
      </div>
    </div>
  );
};

export default DataContainer;
