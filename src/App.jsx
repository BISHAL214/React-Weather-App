import React, { useEffect, useState } from "react";
import {
  AirQuality,
  DailyForecast,
  Input,
  LocationCard,
  WeatherDisplay,
  WeatherForeCast,
} from "./Components/index.js";
import useFetch from "./hooks/useFetch.js";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";

export default function App() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentLocationWeatherData, setCurrentLocationWeatherData] =
    useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useFetch();

  const [togClass, setTogClass] = useState("dark");
  const themes = localStorage.getItem("theme");

  function keepTheme() {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "theme-dark") {
        localStorage.setItem("theme", "theme-dark");
      } else if (localStorage.getItem("theme") === "theme-light") {
        localStorage.setItem("theme", "theme-light");
      }
    } else {
      localStorage.setItem("theme", "theme-dark");
    }
  }

  useEffect(() => {
    keepTheme();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [themes]);

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      localStorage.setItem("theme", "theme-light");
      setTogClass("light");
    } else {
      localStorage.setItem("theme", "theme-dark");
      setTogClass("dark");
    }
  };

  const url = `q=${currentLocation?.latitude},${currentLocation?.longitude}&aqi=yes&alerts=yes`;

  useEffect(() => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation(position?.coords);
        currentLocation &&
          fetchData(url)
            .then((res) => {
              setCurrentLocationWeatherData(res);
              setLoading(false);
            })
            .catch((err) => {
              setError(err);
            });
      },
      (err) => {
        console.log(err.message);
      }
    );
  }, [url]);

  const handleApiSubmit = (data) => {
    setLoading(true);
    fetchData(`q=${data?.city}&aqi=yes&alerts=yes`)
      .then((res) => {
        setCurrentLocationWeatherData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div
      className={`app-container ${
        togClass === "dark" ? "bg-[#333333]" : "bg-white"
      }`}
    >
      <>
        {/* <Input submit={handleApiSubmit} /> */}
        <Navbar
          toggle={togClass}
          handleClick={handleOnClick}
          handle={handleApiSubmit}
        />
        <div className=" flex md:flex-row max-md:flex-col">
          <div className=" flex flex-col">
            <div className="flex md:flex-row max-md:flex-col md:items-between">
              <LocationCard
                toggle={togClass}
                loading={loading}
                error={error}
                data={currentLocationWeatherData}
              />
              <WeatherDisplay
                toggle={togClass}
                loading={loading}
                error={error}
                data={currentLocationWeatherData}
              />
            </div>
            <div className=" w-full flex sm:flex-row max-sm:flex-col">
              <WeatherForeCast
                toggle={togClass}
                data={currentLocationWeatherData?.forecast}
                loading={loading}
                error={error}
              />
              <AirQuality
                toggle={togClass}
                loading={loading}
                error={error}
                data={currentLocationWeatherData}
              />
            </div>
          </div>
          <DailyForecast
            toggle={togClass}
            data={currentLocationWeatherData?.forecast?.forecastday}
            loading={loading}
            error={error}
          />
        </div>
      </>
    </div>
  );
}
