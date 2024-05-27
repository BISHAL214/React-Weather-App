import React from "react";
import "./AirQuality.scss";
import Divider from "@mui/material/Divider";
import { Skeleton } from "@mui/material";

const AirQuality = (props) => {
  const { data, loading, error, toggle } = props;

  return (
    <div
      className={`${
        toggle === "dark" ? "dark-bg" : "light-bg"
      } air-quality-container`}
    >
      {loading ? (
        <Skeleton
          sx={
            toggle === "dark" ? { bgcolor: "#E2DFD2" } : { bgcolor: "#333333" }
          }
          height={30}
          width={200}
        />
      ) : (
        <span
          className={`${
            toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
          } air-header`}
        >
          air pollutants
        </span>
      )}

      <div className="air-pollutants-details">
        <div className=" flex justify-between mt-10 mb-10">
          <div className="flex justify-between items-center gap-16">
            {loading ? (
              <Skeleton
                sx={
                  toggle === "dark"
                    ? { bgcolor: "#E2DFD2" }
                    : { bgcolor: "#333333" }
                }
                width={70}
                height={30}
              />
            ) : (
              <span
                className={`${
                  toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                } pollutes`}
              >
                PM2.5
              </span>
            )}
            {loading ? (
              <Skeleton
                sx={
                  toggle === "dark"
                    ? { bgcolor: "#E2DFD2" }
                    : { bgcolor: "#333333" }
                }
                width={100}
                height={30}
              />
            ) : (
              <span
                className={`${
                  toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                } quantity`}
              >{`${data?.current?.air_quality?.pm2_5} μg/m³`}</span>
            )}
          </div>

          <div className="flex justify-between items-center gap-16">
            {loading ? (
              <Skeleton
                sx={
                  toggle === "dark"
                    ? { bgcolor: "#E2DFD2" }
                    : { bgcolor: "#333333" }
                }
                width={70}
                height={30}
              />
            ) : (
              <span
                className={`${
                  toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                } pollutes`}
              >
                NO2
              </span>
            )}
            {loading ? (
              <Skeleton
                sx={
                  toggle === "dark"
                    ? { bgcolor: "#E2DFD2" }
                    : { bgcolor: "#333333" }
                }
                width={100}
                height={30}
              />
            ) : (
              <span
                className={`${
                  toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                } quantity`}
              >{`${data?.current?.air_quality?.no2} ppb`}</span>
            )}
          </div>
        </div>

        {loading ? (
          <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : { bgcolor: "#333333" }
            }
            height={10}
          />
        ) : (
          <Divider
          sx={
            toggle === "dark"
              ? { bgcolor: "#E2DFD2" }
              : { bgcolor: "#333333" }
          }
            orientation="horizontal"
            variant="middle"
          />
        )}

        <div className=" flex justify-between mt-10 mb-10">
          <div className="flex justify-between items-center gap-16">
            {loading ? (
              <Skeleton
                sx={
                  toggle === "dark"
                    ? { bgcolor: "#E2DFD2" }
                    : { bgcolor: "#333333" }
                }
                width={70}
                height={30}
              />
            ) : (
              <span
                className={`${
                  toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                } pollutes`}
              >
                PM10
              </span>
            )}
            {loading ? (
              <Skeleton
                sx={
                  toggle === "dark"
                    ? { bgcolor: "#E2DFD2" }
                    : { bgcolor: "#333333" }
                }
                width={100}
                height={30}
              />
            ) : (
              <span
                className={`${
                  toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                } quantity`}
              >{`${data?.current?.air_quality?.pm10} μg/m³`}</span>
            )}
          </div>

          <div className="flex justify-between items-center gap-16">
            {loading ? (
              <Skeleton
                sx={
                  toggle === "dark"
                    ? { bgcolor: "#E2DFD2" }
                    : { bgcolor: "#333333" }
                }
                width={70}
                height={30}
              />
            ) : (
              <span
                className={`${
                  toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                } pollutes`}
              >
                O3
              </span>
            )}
            {loading ? (
              <Skeleton
                sx={
                  toggle === "dark"
                    ? { bgcolor: "#E2DFD2" }
                    : { bgcolor: "#333333" }
                }
                width={100}
                height={30}
              />
            ) : (
              <span
                className={`${
                  toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                } quantity`}
              >{`${data?.current?.air_quality?.o3} ppb`}</span>
            )}
          </div>
        </div>

        {loading ? (
          <Skeleton
            sx={
              toggle === "dark"
                ? { bgcolor: "#E2DFD2" }
                : { bgcolor: "#333333" }
            }
            height={10}
          />
        ) : (
          <Divider
          sx={
            toggle === "dark"
              ? { bgcolor: "#E2DFD2" }
              : { bgcolor: "#333333" }
          }
            orientation="horizontal"
            variant="middle"
          />
        )}

        <div className=" flex justify-between mt-10 mb-10">
          <div className="flex justify-between items-center gap-16">
            {loading ? (
              <Skeleton
                sx={
                  toggle === "dark"
                    ? { bgcolor: "#E2DFD2" }
                    : { bgcolor: "#333333" }
                }
                width={70}
                height={30}
              />
            ) : (
              <span
                className={`${
                  toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                } pollutes`}
              >
                CO
              </span>
            )}
            {loading ? (
              <Skeleton
                sx={
                  toggle === "dark"
                    ? { bgcolor: "#E2DFD2" }
                    : { bgcolor: "#333333" }
                }
                width={100}
                height={30}
              />
            ) : (
              <span
                className={`${
                  toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                } quantity`}
              >{`${data?.current?.air_quality?.co} ppb`}</span>
            )}
          </div>

          <div className="flex justify-between items-center gap-16">
            {loading ? (
              <Skeleton
                sx={
                  toggle === "dark"
                    ? { bgcolor: "#E2DFD2" }
                    : { bgcolor: "#333333" }
                }
                width={70}
                height={30}
              />
            ) : (
              <span
                className={`${
                  toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                } pollutes`}
              >
                SO2
              </span>
            )}
            {loading ? (
              <Skeleton
                sx={
                  toggle === "dark"
                    ? { bgcolor: "#E2DFD2" }
                    : { bgcolor: "#333333" }
                }
                width={100}
                height={30}
              />
            ) : (
              <span
                className={`${
                  toggle === "dark" ? "text-[#fffcfc]" : "text-[#333333]"
                } quantity`}
              >{`${data?.current?.air_quality?.so2} ppb`}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
