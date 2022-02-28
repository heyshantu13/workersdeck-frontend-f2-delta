
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
import SelectAddress from "./features/booking/Selectaddress";
import SelectTime from "./features/booking/SelectTime";
import BookingConfirmation from "./features/booking/ValidateBooking";
import ThankYou from "./features/booking/ThankYou"

import NotFound from"./pages/NotFound";
import {useSelector,useDispatch} from "react-redux";



function App() {

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

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
            <Route exact path="/select-address" element={<SelectAddress />} />
            <Route exact path="/select-time" element={<SelectTime />} />
            <Route exact path="/confirmation-booking" element={<BookingConfirmation />} />
            <Route exact path="/confirmed" element={<ThankYou />} />
            <Route path='*' element={<NotFound />}  />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
