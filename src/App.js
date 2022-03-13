
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {
  Login,
  Home,
  Signup,
  ServiceList,
  SelectAddress,
  SelectTime,
  BookingConfirmation,
  ThankYou,
  NewAddress,
  Dashboard,
  AllBookings,
  ResetPass
} from "./features";
import {Header} from "./components/";
import ProtectedOutlet , {LoggedInOutlet} from "./ProtectedOutlet";
import NotFound from"./pages/NotFound";
import { createBrowserHistory } from 'history';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
            <Route exact path="dashboard" >
            <Route index={true} element={<Dashboard />}></Route>
              <Route path="all-bookings" element={<AllBookings />} />
            </Route>
           
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
