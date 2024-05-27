import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Input from "../Input/Input";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.scss";
import { Button, Drawer, FormControlLabel } from "@mui/material";
import { MaterialUISwitch } from "../Weather-Map/ThemeToggle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function Navbar({ handle, handleClick, toggle }) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "transparent" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className=" flex pl-0 lg:items-center lg:gap-5">
            <NavLink className="p-2" to={"/weather-map"}>
              <button
                className={`button ${
                  toggle === "dark" ? "dark-bg" : "light-bg"
                }`}
              >
                <span
                  className={`button-content ${
                    toggle === "dark" ? "text-white" : "text-[#333333]"
                  }`}
                >
                  Weather Map{" "}
                </span>
              </button>
            </NavLink>
            <Button
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon sx={{ color: toggle === "dark" ? "white" : "#333333" }} />
            </Button>
            <Drawer
              sx={{
                "& .MuiDrawer-paper": {
                  width: {
                    xs: "70%",
                    sm: "50%",
                  },
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                  backgroundColor: toggle === "dark" ? "#333333" : "white",
                },
              }}
              open={open}
              onClose={() => setOpen(false)}
            >
              <Button
                onClick={() => setOpen(false)}
                sx={{ position: "absolute", pt: 1, pl: 0, pr: 2 }}
              >
                <CloseIcon sx={{ width: "100%", height: "2rem", color: toggle === "dark" ? "white" : "#333333" }} />
              </Button>

              <FormControlLabel
                sx={{
                  pl: 3,
                  pt: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                control={
                  <MaterialUISwitch
                    sx={{ mt: 0, top: 0 }}
                    onClick={handleClick}
                    defaultChecked
                  />
                }
              />
              <NavLink
                className={`pt-5 pl-3 flex items-start font-thin font-serif ${
                  toggle === "dark" ? "text-white" : "text-[#333333]"
                }`}
                to={"/weather-map"}
              >
                Weather Map
              </NavLink>
            </Drawer>
            <FormControlLabel
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
              control={
                <MaterialUISwitch
                  sx={{ mt: 0, top: 0 }}
                  onClick={handleClick}
                  defaultChecked
                />
              }
            />
          </div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon
                sx={
                  toggle === "dark" ? { color: "white" } : { color: "#333333" }
                }
              />
            </SearchIconWrapper>
            <Input toggle={toggle} submit={handle} />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
