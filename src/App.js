import logo from './logo.svg';
// import store from './app/store';
import { Provider } from 'react-redux';
import Header from "./components/Header/Header";
import Login from "./features/login/login";
import Home from "./features/home/home";
import Signup from "./features/signup/signup";

function App() {
  return (
    <>
    <Header/>
    <Signup/>
    </>
  );
}

export default App;
