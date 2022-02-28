import axios from "axios";

const API_URL = "http://18.118.208.14:8080/api/v1/";

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

const WDServiceList = {
  fetchServiceList
};
export default WDServiceList;