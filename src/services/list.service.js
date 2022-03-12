import axios from "axios";
import authHeader from "./auth-header.service";

const API_URL = "http://18.118.208.14:8080/api/v1/";
const token = authHeader();

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
  }
};


const fetchServiceList = (city, pincode,category_id) => {
  return axios
    .get(API_URL + "services/list/", { params: { city,pincode,category_id },axiosConfig })
    .then((response) => {
      console.log(response.data);
        return response.data;
    });
};

const fetchServiceInfo = (service_id) => {
  return  axios.get(
    API_URL + "service/"+service_id,
    {headers: {
            "Content-type": "Application/json",
            "Authorization": `${token.Authorization}`
            }   
    }
  )
    .then((response) => {
        return response.data;
    }).catch(err => {
      return {
        status:false,
        message:"something went wrong",
        data: {},
      };
    });
};

const WDServiceList = {
  fetchServiceList,
  fetchServiceInfo
};
export default WDServiceList;