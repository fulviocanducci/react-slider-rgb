import React from "react";

import Ranger from "./Ranger";
import InputRanger from "./InputRanger";

function Items({ min, max, handleColor, color, id }) {
  return (
    <>
      <Ranger
        id={id}
        color={color}
        min={min}
        max={max}
        handleColor={handleColor}
      />
      <InputRanger
        id={id}
        style={{ marginTop: 10 }}
        type="number"
        min={min}
        max={max}
        color={color}
        handleColor={handleColor}
      />
    </>
  );
}

export default Items;
