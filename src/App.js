//     const key = "b8097d6d4401dc702b177bb973d9e8de";
import React from "react";
import Temp from "./components/Temp";
function App() {
  // const res = fetch(
  //   "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b8097d6d4401dc702b177bb973d9e8de"
  // )
  //   .then((response) => response.json())
  //   .then((data) => console.log(data["main"]["temp"]));

  return (
    <>
      <Temp />
    </>
  );
}
export default App;
