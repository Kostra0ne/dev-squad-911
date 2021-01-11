import axios from "axios";

const service = axios.create({
  baseURL: process.env.BACKEND_URL + "/api",
});

export default {
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
};
