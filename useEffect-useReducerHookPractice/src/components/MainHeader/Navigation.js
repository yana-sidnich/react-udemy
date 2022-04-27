import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
  const ctx = useContext(AuthContext);
  console.log(ctx);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isUserLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isUserLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isUserLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
