import React from "react";

function InputRanger({ min, max, handleColor, color, id }) {
  return (
    <input
      style={{ marginTop: 10 }}
      type="number"
      min={min}
      max={max}
      value={color}
      onChange={(e) => handleColor(id, parseInt(e.target.value) || 0)}
    />
  );
}

export default InputRanger;
