import { Routes, Route } from "react-router-dom";
import store from "./app/Store";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import PrivateRouter from "./pages/PrivateRouter";
import Register from "./pages/Register";
import Dashboaard from "./pages/Dashboaard";
import Home from "./pages/Home";
import Firms from "./pages/Firms";
import Purchases from "./pages/Purchases";
import Sales from "./pages/Sales";
import Products from "./pages/Products";
import Brands from "./pages/Brands";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboaard />}>
            <Route index element={<Home />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="sales" element={<Sales />} />
            <Route path="firms" element={<Firms />} />
            <Route path="products" element={<Products />} />
            <Route path="brands" element={< Brands/>} />
          </Route>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
