import React, { useEffect, useState } from "react";
import "./Map.scss";
import { Box, Drawer } from "@mui/material";

const AnimateComponent = ({ data, loading, error, toggle }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (data) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [data]);


  return (
    <div className="animate-container">
      hello
    </div>
  );
};

export default AnimateComponent;
