import { Router, Routes, Route } from "react-router-dom";
import store from "./App/Store";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import PrivateRouter from "./pages/PrivateRouter";
import Register from "./pages/Register";
import Dashboaard from "./pages/Dashboaard";
import Home from "./pages/Home";
import Firms from "./pages/Firms";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboaard />}>
            <Route index element={<Home />} />
            <Route path="firms" element={<Firms />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
