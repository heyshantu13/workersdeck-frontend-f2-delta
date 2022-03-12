import axios from "axios";
import authHeader from "./auth-header.service";

const API_URL = "http://18.118.208.14:8080/api/v1/";
const token = authHeader();

let axiosConfig = {
  headers: {
  "Content-type": "Application/json",
  "Authorization": `${token.Authorization}`
}
};

const fetchUserAddress =  () => {
  return  axios.get(
    API_URL + "user/address",axiosConfig
  )
    .then((response) => {
        return response.data;
    }).catch(err => {
      return {};
    });
};

const storeUserAddress = (data) => {
  const {name,address,type,pin_code} = data;
  return axios.post(API_URL + "user/save/address", {
    name,
    address,
    type,
    pin_code,
  }, axiosConfig).then((response) => {
    return response.data;
  }).catch((error) => {
    return error;
  })
}

const UserAddressService = {
    fetchUserAddress,
    storeUserAddress
};
export default UserAddressService;