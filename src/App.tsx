import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import RouteManager from "./Routes/RouteManager";

const App = () => {
  return (
    <>
    <RouteManager/>
    <ToastContainer/>
    </>
  );
};

export default App;
