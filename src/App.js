
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Header from "./components/Header/Header";
import Login from "./features/login/login";
import Home from "./features/home/home";
import Signup from "./features/signup/signup";
import ResetPass from "./features/reset/reset";
import ServiceList from "./features/service/service";
import SelectAddress from "./features/booking/Selectaddress";
import SelectTime from "./features/booking/SelectTime";
import BookingConfirmation from "./features/booking/ValidateBooking";
import ThankYou from "./features/booking/ThankYou";
import NewAddress from "./features/booking/addNewAddress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from"./pages/NotFound";
import ProtectedOutlet , {LoggedInOutlet} from "./ProtectedOutlet";


function App() {

  var hist = createBrowserHistory();


  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
    <Header/>
      <Routes history={hist}>
            <Route exact path="/" element={<Home />} />
            {/* If Already Logged In Then Redirect To Dashboard */}
            <Route element={<LoggedInOutlet />}>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Signup />} />
              <Route exact path="/reset" element={<ResetPass />} />
            </Route>
            <Route path="/services" element={<ServiceList />}>
                <Route path=":serviceId" element={<ServiceList />} />
            </Route>
            <Route element={<ProtectedOutlet />}>
              <Route exact path="/dashboard" element={<ThankYou />} />
              <Route exact path="/select-address" element ={<SelectAddress/>} />
              <Route exact path="/new-address" element={<NewAddress />} />
              <Route exact path="/select-time" element={<SelectTime />} />
              <Route exact path="/confirmation-booking" element={<BookingConfirmation />} />
              <Route exact path="/confirmed" element={<ThankYou />} />
            </Route>
            <Route path='*' element={<NotFound />}  />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
