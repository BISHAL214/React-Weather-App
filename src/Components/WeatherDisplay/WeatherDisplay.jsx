import React from "react";
import { Skeleton } from "@mui/material";
import "./WeatherDisplay.scss";

const WeatherDisplay = (props) => {
  const { data, loading, error, toggle } = props;

  return (
    <div className={`${toggle === "dark" ? "dark-bg" : "bg-white"} weather-container`}>
      <div className="weather-header">
        <div className=" flex flex-col">
          <span
            className={`${
              toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
            } city-zone`}
          >
            {loading ? (
              <Skeleton
              sx={
                toggle === "dark"
                  ? { bgcolor: "#E2DFD2" }
                  : null
              }
                width={210}
              />
            ) : (
              `${data?.location?.tz_id}`
            )}
          </span>
          <span
            className={`${
              toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
            } lat-long`}
          >
            {loading ? (
              <Skeleton
              sx={
                toggle === "dark"
                  ? { bgcolor: "#E2DFD2" }
                  : null
              }
                width={210}
                height={30}
              />
            ) : (
              `Latitude: ${data?.location?.lat}, Longitude: ${data?.location?.lon}`
            )}
          </span>
        </div>
        <span
          className={`${
            toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
          } condition`}
        >
          {loading ? (
            <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : null
            }
              width={200}
            />
          ) : (
            data?.current?.condition?.text
          )}
        </span>
      </div>

      <div className="weather-information">
        <div className="feels-like">
          <h1
            className={`${
              toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
            }`}
          >
            {loading ? (
              <Skeleton
              sx={
                toggle === "dark"
                  ? { bgcolor: "#E2DFD2" }
                  : null
              }
                className=" relative"
                width={120}
                height={80}
              />
            ) : (
              `${Math.floor(data?.current?.feelslike_c)}°C`
            )}
          </h1>
          {loading ? (
            <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : null
            }
              height={30}
            />
          ) : (
            <span
              className={`${
                toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
              }`}
            >
              Feels Like
            </span>
          )}
        </div>
        <div className="humidity">
          {loading ? (
            <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : null
            }
              width={120}
              height={80}
            />
          ) : (
            <h1
              className={`${
                toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
              }`}
            >
              {data?.current?.humidity}%
            </h1>
          )}
          {loading ? (
            <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : null
            }
              height={30}
            />
          ) : (
            <span
              className={`${
                toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
              }`}
            >
              Humidity
            </span>
          )}
        </div>
        <div className="pressure">
          <h1
            className={`${
              toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
            }`}
          >
            {loading ? (
              <Skeleton
              sx={
                toggle === "dark"
                  ? { bgcolor: "#E2DFD2" }
                  : null
              }
                width={120}
                height={80}
              />
            ) : (
              `${data?.current?.pressure_mb}Mb`
            )}
          </h1>
          {loading ? (
            <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : null
            }
              height={30}
            />
          ) : (
            <span
              className={`${
                toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
              }`}
            >
              Pressure
            </span>
          )}
        </div>
        <div className="visibility">
          <h1
            className={`${
              toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
            }`}
          >
            {loading ? (
              <Skeleton
              sx={
                toggle === "dark"
                  ? { bgcolor: "#E2DFD2" }
                  : null
              }
                width={120}
                height={80}
              />
            ) : (
              `${data?.current?.vis_km}Km`
            )}
          </h1>
          {loading ? (
            <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : null
            }
              height={30}
            />
          ) : (
            <span
              className={`${
                toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
              }`}
            >
              Visibility
            </span>
          )}
        </div>
        <div className="wind-speed">
          <h1
            className={`${
              toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
            }`}
          >
            {loading ? (
              <Skeleton
              sx={
                toggle === "dark"
                  ? { bgcolor: "#E2DFD2" }
                  : null
              }
                width={120}
                height={80}
              />
            ) : (
              `${Math.floor(data?.current?.wind_kph)}Km/h`
            )}
          </h1>
          {loading ? (
            <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : null
            }
              height={30}
            />
          ) : (
            <span
              className={`${
                toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
              }`}
            >
              Wind
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
