import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/api",
  withCredentials: true, // Sends cookies to API
});

const apiHandler = {
  service,

  signin(data) {
    return service.post("/auth/signin", data).then((res) => res.data);
  },

  signup(data) {
    return service.post("/auth/signup", data).then((res) => res.data);
  },

  isLoggedIn() {
    return service.get("/auth/isLoggedIn").then((res) => res.data);
  },

  logout() {
    return service.get("/auth/logout");
  },
};

export default apiHandler;
