import React, { useState } from "react";

import Element from "./components/Element";
import Barra from "./components/Barra";
import Container from "./components/Container";
import Items from "./components/Items";

function App() {
  const min = 0;
  const max = 255;
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });
  const handleColor = (id, value) => {
    setColor({ ...color, [id]: value });
  };
  return (
    <Container>
      <pre>{JSON.stringify(color)}</pre>
      <Element>
        <Items
          min={min}
          max={max}
          color={color.r}
          handleColor={handleColor}
          id="r"
        />
      </Element>
      <Element>
        <Items
          min={min}
          max={max}
          color={color.g}
          handleColor={handleColor}
          id="g"
        />
      </Element>
      <Element>
        <Items
          min={min}
          max={max}
          color={color.b}
          handleColor={handleColor}
          id="b"
        />
      </Element>
      <Barra r={color.r} g={color.g} b={color.b} />
    </Container>
  );
}

export default App;
