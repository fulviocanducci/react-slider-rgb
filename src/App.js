import React from "react";

import Ranger, { useRanger } from "./components/Ranger";
import Element from "./components/Element";
import Barra from "./components/Barra";
import Container from "./components/Container";

function App() {
  const [color, onChange] = useRanger();
  return (
    <Container>
      <pre>{JSON.stringify(color)}</pre>
      <Element>
        <Ranger id="r" min={0} max={255} to={color.r} onChange={onChange} />
      </Element>
      <Element>
        <Ranger id="g" min={0} max={255} to={color.g} onChange={onChange} />
      </Element>
      <Element>
        <Ranger id="b" min={0} max={255} to={color.b} onChange={onChange} />
      </Element>
      <Barra r={color.r} g={color.g} b={color.b} />
    </Container>
  );
}

export default App;
