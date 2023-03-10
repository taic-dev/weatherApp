import "./App.css";
import React, { Fragment } from "react";
import { Reset } from "styled-reset";
import Header from "./components/molecules/Header";
import Main from "./components/templates/Main/Main";
import Footer from "./components/molecules/Footer";
import Loading from "./components/atoms/Loading";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Location from "./components/templates/Location/Location";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [X, setX] = useState(139.6823);
  const [Y, setY] = useState(35.6785);
  const [topPrefecture, setTopPrefecture] = useState("東京");
  const [topCity, setTopCity] = useState("千代田区");
  const [test, setTest] = useState("テスト");

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const baseURL = `https://api.open-meteo.com/v1/forecast?latitude=${Y}&longitude=${X}&current_weather=true&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Asia%2FTokyo&current_weather`;
        let response = await axios.get(baseURL);
        setWeatherInfo(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchData();
  }, [X, Y]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div style={{ maxWidth: "450px", margin: "auto" }}>
        <Reset />
        <Header />
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                weatherInfo !== null && (
                  <Main
                    weatherInfo={weatherInfo}
                    topPrefecture={topPrefecture}
                    topCity={topCity}
                    test={test}
                  />
                )
              }
            />
            <Route
              path="/location"
              element={
                <Location
                  setX={setX}
                  setY={setY}
                  setTopPrefecture={setTopPrefecture}
                  setTopCity={setTopCity}
                  setTest={setTest}
                />
              }
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
