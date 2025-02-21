import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

export const TemperatureGraph = ({ temperatureData, hoursData }) => {
  // State for temperatures
  const [temps, setTemps] = useState([]);
  const [hours, setHours] = useState([]);

  // Update temps state when temperatureData changes
  useEffect(() => {
    setTemps(temperatureData);
    setHours(hoursData)
  }, [temperatureData]);


  return (
    <div style={{ position: "absolute", top: 210, left: 300, right: -90, bottom: 0, transform: "rotate(160deg)" }}>
      <Plot
        data={[
          {
            type: "scatter",
            mode: "lines",
            line: {
              color: "blue",
              width: 2,
            },
            x: hours, // X-axis: constant values
            y: temps, // Y-axis: temperature values
          },
        ]}
        layout={{
          width: "100%",
          height: "100%",
          showlegend: false,
          paper_bgcolor: "transparent",
          plot_bgcolor: "transparent",
          xaxis: { showgrid: false, zeroline: false, showticklabels: false },
          yaxis: { showgrid: false, zeroline: false, showticklabels: false },
          autosize: true,
        }}
        config={{ displayModeBar: false }}
      />
    </div>
  );
};

