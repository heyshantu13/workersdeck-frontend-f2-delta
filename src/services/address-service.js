import axios from "axios";

const API_URL = "http://18.118.208.14:8080/api/v1/";



let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
  }
};



const fetchUserAddress = async (token) => {
    console.log("token2",token);
  return await axios.get(
    API_URL + "user/address",
    {headers: {
            "Content-type": "Application/json",
            "Authorization": `${token}`
            }   
    }
  )
    .then((response) => {
      console.log(response.data);
        return response.data;
    });
};

const UserAddressService = {
    fetchUserAddress
};
export default UserAddressService;