import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import Login from "./components/CustomerForms/Login/Login";
import Register from "./components/CustomerForms/Register/Register";
import NotFound from "./components/Shared/NotFound/NotFound";
// import RequireAuth from "./components/CustomerForms/RequireAuth/RequireAuth";
import Footer from "./components/Shared/Footer/Footer";
import RequireAuth from "./components/CustomerForms/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
