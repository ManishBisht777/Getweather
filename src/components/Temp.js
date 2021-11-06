import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Temp() {
  const [city, setcity] = useState("Delhi");
  const [search, setsearch] = useState("Delhi");
  const [data, setdata] = useState("0");

  useEffect(() => {
    const fetchapi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b8097d6d4401dc702b177bb973d9e8de`;

      const response = await fetch(url);
      const resjson = await response.json();
      setcity(resjson.main);
      setdata(resjson.weather[0]);
      console.log(resjson);
    };
    fetchapi();
  }, [search]);

  return (
    <div>
      <Mainbox>
        <Background>
          <img src="/images/w1.jpg" alt="" />
        </Background>
        <Searchbar>
          <ion-icon name="search"></ion-icon>
          <input
            type="search"
            placeholder="Type Here"
            onChange={(event) => {
              setsearch(event.target.value);
            }}
          />
        </Searchbar>
        {!city ? (
          <p>No data found</p>
        ) : (
          <>
            <Cont1>
              <h3>{city.temp} °</h3>
              <h2>{search}</h2>
              <ion-icon name="sunny-outline"></ion-icon>
              <Description>
                <p>{data.description}</p>
              </Description>
              <Maxmin>
                <span>Min {city.temp_min}</span>
                <span>Max {city.temp_max}</span>
              </Maxmin>
            </Cont1>
            <Cont2></Cont2>
          </>
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
  margin: 20px;
  h3 {
    font-size: 80px;
    letter-spacing: 1px;
    color: rgb(249, 249, 249);
    margin: 5px;
  }

  h2 {
    font-size: 40px;
    letter-spacing: 1px;
    color: #a9a9a9;
    margin: 5px;
  }

  ion-icon {
    font-size: 80px;
    color: white;
    margin: 5px 20px;
  }
`;

const Searchbar = styled.div`
  margin: 20px;
  background: white;
  width: fit-content;
  border-radius: 40px;
  padding: 5px 10px;
  display: flex;
  align-items: center;

  ion-icon {
    font-size: 20px;
    margin: 0px 5px;
  }

  input {
    background: transparent;
    border: none;

    &:focus {
      outline: none;
    }
  }
`;

const Cont2 = styled.div``;

const Maxmin = styled.div`
  width: 158px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #fff;
`;

const Description = styled.div`
  font-size: 18px;
  color: #fff;
  margin: 0px 20px;
`;
