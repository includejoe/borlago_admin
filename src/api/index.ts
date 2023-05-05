import axios from "axios";

const borlagoapi = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

export default borlagoapi;
