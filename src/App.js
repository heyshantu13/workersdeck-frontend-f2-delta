
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
import ServiceList from "./features/service/service";


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
            <Route path="/services" element={<ServiceList />}>
                <Route path=":serviceId" element={<ServiceList />} />
            </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
