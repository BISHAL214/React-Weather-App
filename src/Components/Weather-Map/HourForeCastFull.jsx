import { Box, Divider, Skeleton } from "@mui/material";
import React, { useState } from "react";


const HourForeCastFull = ({ data, loading, error, toggle, light, dark, index }) => {
  const hoursData = data?.forecast?.forecastday;
  const convertIntoTime = (hour) => {
    const time = new Date(hour?.time)
      .toLocaleTimeString("es-US", { hour: "2-digit", minute: "2-digit" })
      .split(" ");
    return time;
  };

  // console.log(data);

  return (
    <>
      <div className=" flex justify-center flex-row pl-4 pr-4 min-h-full max-sm:gap-5 max-xl:gap-4">
        {hoursData &&
          hoursData[index]?.hour?.map((hour, index) => (
            <div key={index} className=" flex flex-col justify-around items-center">
              <div className="flex flex-col justify-center items-center">
                {loading ? (
                  <Skeleton
                    sx={
                      toggle === "dark"
                        ? { bgcolor: "#E2DFD2" }
                        : { bgcolor: "#3333333" }
                    }
                    width={40}
                  />
                ) : (
                  <span
                    className={`${
                      toggle === "dark" ? dark.color : light.color
                    } font-thin`}
                  >
                    {convertIntoTime(hour)[0]}
                  </span>
                )}
                {loading ? (
                  <Skeleton
                    sx={
                      toggle === "dark"
                        ? { bgcolor: "#E2DFD2" }
                        : { bgcolor: "#3333333" }
                    }
                    width={24}
                  />
                ) : (
                  <span
                    className={`${
                      toggle === "dark" ? dark.color : light.color
                    } font-thin`}
                  >
                    {convertIntoTime(hour)[1].toUpperCase()}
                  </span>
                )}
              </div>
              {loading ? (
                <Box mx={"2.9px"}>
                  <Skeleton
                    variant="circular"
                    sx={
                      toggle === "dark"
                        ? { bgcolor: "#E2DFD2" }
                        : { bgcolor: "#3333333" }
                    }
                    width={58}
                    height={58}
                  />
                </Box>
              ) : (
                <img src={hour?.condition?.icon} alt={hour?.condition?.text} />
              )}
              {loading ? (
                <Skeleton
                  sx={
                    toggle === "dark"
                      ? { bgcolor: "#E2DFD2" }
                      : { bgcolor: "#3333333" }
                  }
                  width={30}
                />
              ) : (
                <span
                  className={`${
                    toggle === "dark" ? dark.color : light.color
                  } font-thin`}
                >
                  {Math.floor(hour?.temp_c)}°C
                </span>
              )}
            </div>
          ))}
      </div>

    </>
  );
};

export default HourForeCastFull;
