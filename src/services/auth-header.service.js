export default  function authHeader() {

    const user = JSON.parse(localStorage.getItem('user'));
    try{
        return { Authorization: user.data.accessToken };
    }catch(err){
      return {};
    }
    
  }