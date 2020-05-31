import React from "react";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

function Ranger({ min, max, handleColor, color, id }) {
  return (
    <InputRange
      value={color}
      minValue={min}
      maxValue={max}
      onChange={(v) => handleColor(id, v)}
    />
  );
}

export default Ranger;
