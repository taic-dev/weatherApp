require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3001
const axios = require("axios");
var path = require('path');
const session = require("express-session");

app.use(
  session({
    secret: "secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: false, maxage: 1000 * 60 * 30 },
  })
);

// jsonの受け取り
app.use(express.json());

// cors対策
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.APP_URL);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTION"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// こいつが原因ぽい
// app.use(express.static(path.join(__dirname, '../react-weather/build')));

app.get("/", (req, res) => {
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;
  const checkLocation = async (latitude = 139.6823, longitude = 35.6785) => {
    const URL = `https://api.open-meteo.com/v1/forecast?latitude=${longitude}&longitude=${latitude}&current_weather=true&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Asia%2FTokyo&current_weather`;
    await axios.get(URL).then((result) => {
      res.json(result.data);
    });
  };

  checkLocation(latitude, longitude);
});

app.get("/prefectures", async (req, res) => {
  const URL = "https://geoapi.heartrails.com/api/json?method=getPrefectures";
  await axios.get(URL).then((result) => {
    res.json(result.data);
  });
});

app.post("/change-city", async (req, res) => {
  let prefecture = req.body.prefecture;
  let URL = encodeURI(
    `http://geoapi.heartrails.com/api/json?method=getCities&prefecture=${prefecture}`
  );
  await axios.get(URL).then((result) => {
    res.json(result.data);
  });
});

app.post("/setting-location", async (req, res) => {
  let prefecture = req.body.selectPrefectures;
  let URL = encodeURI(
    `http://geoapi.heartrails.com/api/json?method=getTowns&prefecture=${prefecture}`
  );
  await axios.get(URL).then((result) => {
    res.json(result.data);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'../react-weather/build/index.html'));
});

app.listen(port, () => {
  console.log(`port ${port}`);
});
