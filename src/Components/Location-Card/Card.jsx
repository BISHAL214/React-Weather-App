import React from "react";
import "./Card.scss";
import { Skeleton } from "@mui/material";

const Card = (props) => {
  const { data, loading, error, toggle } = props;

  const localTime = new Date(data?.location?.localtime).toString();
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

  // console.log(data);

  return (
    <div className={`${toggle === "dark" ? "dark-bg" : "light-bg"} card`}>
      <div className="card-header">
        <span  className={toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"}>
          {loading ? (
            <Skeleton
              sx={
                toggle === "dark"
                  ? { bgcolor: "#E2DFD2" }
                  : { bgcolor: "#333333" }
              }
              variant="rounded"
            />
          ) : (
            <span>
              {data?.location?.name}, {data?.location?.region}
            </span>
          )}
          <br />
          {loading ? (
            <Skeleton
              sx={
                toggle === "dark"
                  ? { bgcolor: "#E2DFD2" }
                  : { bgcolor: "#333333" }
              }
              height={20}
            />
          ) : (
            data?.location?.country
          )}
        </span>
        <span  className={toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"}>
          {loading ? (
            <Skeleton
              sx={
                toggle === "dark"
                  ? { bgcolor: "#E2DFD2" }
                  : { bgcolor: "#333333" }
              }
              height={20}
            />
          ) : (
            `${monthName} ${date} ${year}`
          )}
        </span>
      </div>

      <div className=" flex justify-start mt-4">
        {loading ? (
          <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : { bgcolor: "#333333" }
            }
            variant="circular"
            width={60}
            height={60}
          />
        ) : (
          <img src={data?.current?.condition?.icon} width={70} height={70} />
        )}
      </div>

      <span  className={toggle === "dark" ? "text-[#fffcfc] temp" : "text-[#333333] temp"}>
        {loading ? (
          <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : { bgcolor: "#333333" }
            }
            width={240}
            height={100}
          />
        ) : (
          `${Math.floor(data?.current?.temp_c)}°C`
        )}
      </span>
    </div>
  );
};

export default Card;
