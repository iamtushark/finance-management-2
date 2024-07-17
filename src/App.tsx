import { ToastContainer } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import RouteManager from "./Routes/RouteManager";

const App = () => {
  const user = useAppSelector(selectLoggedInUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    initializeDataStore();

    const userId = localStorage.getItem(localStorageKeys.user);
    console.log("userid", userId);
    if (userId) {
      dispatch(setUser(userId))
      dispatch(fetchTransactions(userId));
      dispatch(fetchBudget(userId))
      return;
    }
  }, [user]);

  return (
    <>
      <RouteManager />
      <ToastContainer />
    </>
    <>
      <RouteManager />
      <ToastContainer />
    </>
  );
};

export default App;
