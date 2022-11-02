import React, { useContext } from "react";
import AuthContext from "./components/10/store/auth-context";
import Home from "./components/10/Home/Home";
import Login from "./components/10/Login/Login";
import MainHeader from "./components/10/MainHeader/MainHeader";

function Section10() {
  const ctx = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default Section10;
