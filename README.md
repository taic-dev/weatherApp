<p align="center">
<img width="327" alt="スクリーンショット 2023-01-28 9 39 02" src="https://user-images.githubusercontent.com/52269577/215230525-2e48470d-42f3-4b01-8c9c-776eca3efa8c.png">
</p>

# Weather App 〜全国のお天気を検索〜

## Demo
<div align="center">
<video controls src="https://user-images.githubusercontent.com/52269577/215363313-51ea18d2-9b9b-49af-9266-08924c237ebb.mov"></video>
</div>

## Description
WEB上で全国のお天気を検索できるWEBアプリケーションです。<br>
トップページでは選択した地域の今日の天気、1時間毎の天気/気温、1週間の天気/気温を確認できます。<br>
Locationページでは調べたい地域を選択できます。

## Features
- 選択した地域の今日の天気
- 選択した地域の1時間毎の天気/気温
- 選択した地域の1週間の天気/気温
- 全国の地域を検索/選択する機能

## Requirement
- node.js v16.14.0
- react.js v17.0.2

## Usage
1. 今日の天気,1時間毎の天気/気温,1週間の天気/気温を確認できる
2. デフォルトが東京のため別地域の天気を調べたい場合はLocationページをクリック
3. 都道府県,市区町村,町域名を入力して検索
4. トップページに戻ると選択した地域の天気を確認できる

## How to install & Start-up
```
$ git clone https://github.com/taic-dev/weatherApp.git

・node api Start-up
$ cd weather-app/node-weather-api
$ npm install --save react@17.0.2 react-dom@17.0.2
$ npm install react-router-dom@5.2.0
.env.exampleを.envに変更
$ node api.js

・react Start-up
$ cd weather-app/react-weather
$ npm install
$ npm start
```

## Author
taic-dev
