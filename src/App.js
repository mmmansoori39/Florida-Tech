import React, { useEffect, useState } from "react";
import RequireAuth from "./components/RequireAuth";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./style/style.css";
import "./style/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Blogpage from "./pages/Blogpage";
import Shoppage from "./pages/Shoppage";
import Contactpage from "./pages/Contactpage";
import Loginregisterpage from "./pages/Loginregisterpage";
import Cartpage from "./pages/Cartpage";
import Bookdetailspage from "./pages/Bookdetailspage";
import { AuthContex } from "./context/auth-context";
import Logout from "./components/Logout";
import { auth } from "./firebase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setname]= useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setname(user.displayName)
    })
  })

  return (
    <AuthContex.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className="ff">
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/shop" Component={Shoppage} />
            <Route path="/cart" Component={Cartpage} />
            <Route path="/bookdetails" Component={Bookdetailspage} />
            <Route path="/contact" Component={Contactpage} />
            <Route path="/login" Component={Loginregisterpage} />
            <Route path="/blog" Component={Blogpage} />
            <Route Component={RequireAuth}>
              <Route path="/logout" element={<Logout name={name} />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </AuthContex.Provider>
  );
}

export default App;
