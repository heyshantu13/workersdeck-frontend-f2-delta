
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./features/login/login";
import Home from "./features/home/home";
import Signup from "./features/signup/signup";
import ResetPass from "./features/reset/reset";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Signup />} />
            <Route exact path="/reset" element={<ResetPass />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
