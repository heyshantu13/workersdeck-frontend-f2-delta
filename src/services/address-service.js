import axios from "axios";
import authHeader from "./auth-header.service";

const API_URL = "http://18.118.208.14:8080/api/v1/";
const token = authHeader();

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
  }
};


const fetchUserAddress = () => {
  return axios.get(
    API_URL + "user/address",
    {headers: {
            "Content-type": "Application/json",
            "Authorization": `${token.Authorization}`
            }   
    }
  )
    .then((response) => {
        return response.data;
    }).catch(err => {
      return {};
    });
};

const UserAddressService = {
    fetchUserAddress
};
export default UserAddressService;