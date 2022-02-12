import logo from './logo.svg';
// import store from './app/store';
import { Provider } from 'react-redux';
import Header from "./components/Header/Header";
import Home from "./features/home/home";

function App() {
  return (
    <>
    <Header/>
    <Home/>
    </>
  );
}

export default App;
