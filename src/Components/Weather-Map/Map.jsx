import React, { useState, useEffect, useRef, createRef } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import useFetch from "../../hooks/useFetch";
import "./Map.scss";

import DataContainer from "./DataContainer";
import { Button, FormControlLabel } from "@mui/material";
import { MaterialUISwitch } from "./ThemeToggle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import { config } from "../../conf/config";
import AnimateContainer from "./AnimateContainer";

const Map = () => {
  const [centerLat, setCenterLat] = useState(null);
  const [centerLong, setCenterLong] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showDataContainer, setShowDataContainer] = useState(false);

  const [togClass, setTogClass] = useState("dark");
  const themes = localStorage.getItem("theme");
  const dataContainerRef = createRef();

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

  const darkTheme = {
    color: "text-white",
    bgColor: "bg-[#333333]",
    tileLayerUrl: `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${config.mapsApiKey}`,
  };
  const lightTheme = {
    color: "text-[#333333]",
    bgColor: "bg-[#eaeaea]",
    tileLayerUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  };

  const fetchData = useFetch();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position?.coords?.latitude;
          const lng = position?.coords?.longitude;
          setCenterLat(lat);
          setCenterLong(lng);
          setMarkerPosition([lat, lng]);
          fetchData(`q=${lat},${lng}&aqi=yes&alerts=yes`)
            .then((data) => {
              setData(data);
              setLoading(false);
            })
            .catch((err) => {
              setError(err.message);
              setLoading(false);
            });
        },
        (err) => {
          console.log(err.message);
          setLoading(false);
        }
      );
    }, 3000);
  }, []);

  const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;
    setMarkerPosition([lat, lng]);
    setLoading(true);
    setShowDataContainer(true);
    fetchData(`q=${lat},${lng}&aqi=yes&alerts=yes`)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: handleMapClick,
    });
    return null;
  };

  const customIcon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  if (centerLat === null || centerLong === null) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  const mapBackground =
    togClass === "dark" ? darkTheme.bgColor : lightTheme.bgColor;

  return (
    <div
      className={
        togClass === "dark" ? `${darkTheme.bgColor}` : `${lightTheme.bgColor}`
      }
    >
      <MapContainer
        center={[centerLat, centerLong]}
        zoom={10}
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: mapBackground,
          position: "relative",
        }}
        maxZoom={18}
        minZoom={5}
      >
        <TileLayer
          url={
            togClass && togClass === "dark"
              ? darkTheme.tileLayerUrl
              : lightTheme.tileLayerUrl
          }
        />
        <MapClickHandler />
        {markerPosition && (
          <Marker position={markerPosition} icon={customIcon}></Marker>
        )}
      </MapContainer>

      {showDataContainer && (
        <div
          className={`data-container ${
            togClass === "dark" ? darkTheme.bgColor : lightTheme.bgColor
          }`}
          ref={dataContainerRef}
        >
          <DataContainer
            dark={darkTheme}
            light={lightTheme}
            toggle={togClass}
            lat={markerPosition && markerPosition[0]}
            long={markerPosition && markerPosition[1]}
            data={data}
            loading={loading}
            error={error}
          ></DataContainer>
          <div className=" flex flex-col justify-center items-center pl-3 gap-5">
            <FormControlLabel
              control={
                <MaterialUISwitch
                  sx={{ mt: 2, top: 0 }}
                  onClick={handleOnClick}
                  defaultChecked
                />
              }
            />
            <button
              className="flex justify-start items-start"
              onClick={() => setShowDataContainer(false)}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
