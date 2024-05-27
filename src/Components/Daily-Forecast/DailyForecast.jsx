import React from "react";
import "./DailyForecast.scss";
import { Divider, Skeleton } from "@mui/material";

const DailyForecast = (props) => {
  const { data, loading, error, toggle } = props;

  const todayDate = new Date();
  const month = todayDate.getMonth() + 1;
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const today = `${todayDate.getFullYear()}-${formattedMonth}-${todayDate.getDate()}`;

  const dateToNameConverter = (date) => {
    const newDate = new Date(date);
    const options = { weekday: "short" };
    const dayName = newDate.toLocaleDateString("en-US", options);
    return dayName;
  };

  return (
    <div
      className={`${
        toggle === "dark" ? "dark-bg" : "light-bg"
      } daily-forecast-container`}
    >
      {loading ? (
        <Skeleton
          sx={
            toggle === "dark" ? { bgcolor: "#E2DFD2" } : { bgcolor: "#333333" }
          }
          width={200}
          height={30}
        />
      ) : (
        <span
          className={`${
            toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
          } daily-forecast-header`}
        >
          7-day forecast
        </span>
      )}
      <div>
        {data?.map((day, index) => (
          <div key={index}>
            {loading ? (
              <Skeleton
                sx={
                  toggle === "dark"
                    ? { bgcolor: "#E2DFD2" }
                    : { bgcolor: "#333333" }
                }
                height={5}
              />
            ) : (
              <Divider
                sx={
                  toggle === "dark"
                    ? { bgcolor: "#E2DFD2" }
                    : { bgcolor: "#333333" }
                }
                orientation="horizontal"
              />
            )}
            <div className=" flex justify-between items-center m-[4px]">
              {loading ? (
                <Skeleton
                  sx={
                    toggle === "dark"
                      ? { bgcolor: "#E2DFD2" }
                      : { bgcolor: "#333333" }
                  }
                  width={70}
                />
              ) : (
                <span
                  className={`${
                    toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                  }`}
                >
                  {day?.date === today
                    ? "Today"
                    : dateToNameConverter(day?.date)}
                </span>
              )}
              <div className=" flex flex-row justify-center items-center gap-5">
                {loading ? (
                  <Skeleton
                    sx={
                      toggle === "dark"
                        ? { bgcolor: "#E2DFD2" }
                        : { bgcolor: "#333333" }
                    }
                    variant="circular"
                    width={80}
                    height={80}
                  />
                ) : (
                  <img
                    src={day?.day?.condition?.icon}
                    alt={day?.day?.condition?.text}
                    width={88}
                  />
                )}
                {loading ? (
                  <Skeleton
                    sx={
                      toggle === "dark"
                        ? { bgcolor: "#E2DFD2" }
                        : { bgcolor: "#333333" }
                    }
                    width={100}
                  />
                ) : (
                  <span
                    className={`${
                      toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                    }`}
                  >
                    {day?.day?.condition?.text}
                  </span>
                )}
              </div>
              {loading ? (
                <Skeleton
                  sx={
                    toggle === "dark"
                      ? { bgcolor: "#E2DFD2" }
                      : { bgcolor: "#333333" }
                  }
                  width={50}
                />
              ) : (
                <span
                  className={`${
                    toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                  }`}
                >
                  {Math.floor(day?.day?.maxtemp_c)}/
                  {Math.floor(day?.day?.mintemp_c)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
