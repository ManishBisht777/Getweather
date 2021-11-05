//     const key = "b8097d6d4401dc702b177bb973d9e8de";
import React from "react";
import styled from "styled-components";

function App() {
  const res = fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b8097d6d4401dc702b177bb973d9e8de"
  )
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <>
      <Mainbox>
        <p>
          Temp <span>{res[0].main.temp}</span>
        </p>
      </Mainbox>
    </>
  );
}
export default App;

const Mainbox = styled.div``;
