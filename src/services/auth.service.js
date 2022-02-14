import axios from "axios";

const API_URL = "http://18.118.208.14:8080/api/v1/";

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
  }
};

const register = (fullname, email, password,mobile_no) => {
  return axios.post(API_URL + "user/signup", {
    fullname,
    email,
    password,
    mobile_no
  },axiosConfig);
};
const login = (email, password) => {
  return axios
    .post(API_URL + "user/signin", {
       email,
      password,
    })
    .then((response) => {
        if (response.status === true) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const authService = {
  register,
  login,
  logout,
};
export default authService;