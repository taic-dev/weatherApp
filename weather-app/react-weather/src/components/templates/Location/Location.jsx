import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Location = ({
  setX,
  setY,
  setTopPrefecture,
  setTopCity
}) => {
  const [prefectures, setPrefectures] = useState([""]);
  const [city, setCity] = useState([""]);
  const [town, setTown] = useState([""]);
  const [selectPrefectures, setSelectPrefectures] = useState("");
  const [selectCity, setSelectCity] = useState("");
  const [selectTown, setSelectTown] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prefecturesURL = "https://geoapi.heartrails.com/api/json?method=getPrefectures";
        let prefecturesResponse = await axios.get(prefecturesURL);
        setPrefectures(prefecturesResponse.data.response.prefecture);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const changePrefectures = async (e) => {
    setSelectPrefectures(e.target.value);
    setTopPrefecture(e.target.value);

    const changePrefecturesURL = `https://geoapi.heartrails.com/api/json?method=getCities&prefecture=${e.target.value}`;
    let getCityInfo = await axios.get(changePrefecturesURL);
    setCity(getCityInfo.data.response.location);
  };

  const settingLocation = async (e) => {
    setSelectCity(e.target.value);
    setTopCity(e.target.value);

    const settingLocationURL = `https://geoapi.heartrails.com/api/json?method=getTowns&prefecture=${selectPrefectures}`;
    const getTownInfo = await axios.get(settingLocationURL);

    const getTown = getTownInfo.data.response.location.filter(
      (townInfo, index) => townInfo.city == e.target.value
    );

    const townArray = getTown.map((townName) => townName.town);
    setSelectTown(townArray[0]);
    setTown(townArray);
  };

  const settingTown = (e) => setSelectTown(e.target.value);

  const settingCoordinate = async () => {
    const settingLocationURL = `https://geoapi.heartrails.com/api/json?method=getTowns&prefecture=${selectPrefectures}`;
    const getTownInfo = await axios.get(settingLocationURL)

    getTownInfo.data.response.location.map(async (townInfo) => {
      if (selectCity !== townInfo.city) return;
      if (selectTown == townInfo.town) {
        setX(townInfo.x);
        setY(townInfo.y);
        setSelectPrefectures("");
        setSelectCity("");

        localStorage.setItem("Latitude", townInfo.x);
        localStorage.setItem("Longitude", townInfo.y);
      }
    });
  };

  return (
    <main>
      <div className="location-main">
        <FormControl>
          <InputLabel id="demo-simple-select-standard-label">????????????</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select"
            label="????????????"
            value={selectPrefectures}
            onChange={changePrefectures}
          >
            {prefectures.map((prefecture, index) => {
              return (
                <MenuItem key={index} value={prefecture}>
                  {prefecture}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="city-select-label">????????????</InputLabel>
          <Select
            labelId="city-select-label"
            id="demo-simple-select-standard"
            label="????????????"
            value={selectCity}
            onChange={settingLocation}
            // disabled="false"
          >
            {city.map((cityObj, index) => {
              return (
                <MenuItem key={index} value={cityObj.city}>
                  {cityObj.city}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="town-select-label">?????????</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="?????????"
            value={selectTown}
            onChange={settingTown}
            // disabled="false"
          >
            {town.map((townValue, index) => {
              return (
                <MenuItem key={index} value={townValue}>
                  {townValue}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

          <Button variant="contained" onClick={settingCoordinate}>
            ????????????
          </Button>

      </div>
    </main>
  );
};

export default Location;
