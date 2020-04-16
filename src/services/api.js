/*
* This API was implemented in: https://github.com/hugoestevam/nodejs-desafio-01
* If you need to integrate them, please clone this repository.
* By @hugoestevam
*/

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
