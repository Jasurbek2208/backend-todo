import axios from "axios";

export const myAxios = axios.create({
  baseURL: "/",
});

myAxios.interceptors.request.use((req) => {
  let token = localStorage.getItem("TOKEN");
  if (token) {
    req.headers.Authorization = token;
  }

  return req;
});
