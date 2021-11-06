import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Temp() {
  const [city, setcity] = useState("delhi");
  const [search, setsearch] = useState("delhi");

  useEffect(() => {
    const fetchapi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b8097d6d4401dc702b177bb973d9e8de`;

      const response = await fetch(url);
      const resjson = await response.json();
      //   console.log(resjson);
      setcity(resjson.main);
    };
    fetchapi();
  }, [search]);

  return (
    <div>
      <Mainbox>
        <Background>
          <img src="/images/w1.jpg" alt="" />
        </Background>
        <input
          type="search"
          onChange={(event) => {
            setsearch(event.target.value);
          }}
        />
        {!city ? (
          <p>No data found</p>
        ) : (
          <Cont1>
            <h3>{city.temp}</h3>
            <h2>{search}</h2>
            <span>Icon</span>
          </Cont1>
        )}
      </Mainbox>
    </div>
  );
}

export default Temp;

const Mainbox = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// const Wrap = styled.div`
//   backdrop-filter: blur(2px) saturate(180%);
//   -webkit-backdrop-filter: blur(16px) saturate(180%);
//   background-color: rgba(17, 25, 40, 0.75);
//   border-radius: 12px;
//   border: 1px solid rgba(255, 255, 255, 0.125);
// `;

const Cont1 = styled.div`
  h3 {
    font-size: 40px;
    letter-spacing: 1px;
    color: rgb(249, 249, 249);
    margin: 5px;
  }

  h2 {
    font-size: 30px;
    letter-spacing: 1px;
    color: #a9a9a9;
    margin: 5px;
  }
`;
