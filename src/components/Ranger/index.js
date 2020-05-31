import React, { useState } from "react";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

function Ranger({ id, min, max, to, onChange }) {
  const [value, setValue] = useState(to);
  return (
    <InputRange
      value={value}
      minValue={min}
      maxValue={max}
      onChange={(v) => setValue(v)}
      onChangeComplete={(v) => onChange(v, id)}
    />
  );
}

export const useRanger = (initialValue = { r: 0, g: 0, b: 0 }) => {
  const [color, setColor] = useState(initialValue);
  function onChange(value, id) {
    setColor({ ...color, [id]: value });
  }
  return [color, onChange];
};

export default Ranger;
