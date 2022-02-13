import logo from './logo.svg';
// import store from './app/store';
import { Provider } from 'react-redux';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./features/login/login";
import Home from "./features/home/home";
import Signup from "./features/signup/signup";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
