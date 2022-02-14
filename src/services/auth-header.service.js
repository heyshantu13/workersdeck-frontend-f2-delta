export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.data && user.accessToken) {
      return { Authorization: user.data.accessToken };
    } else {
      return {};
    }
  }