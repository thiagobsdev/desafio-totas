import { NavLink, Outlet } from "react-router-dom";

import "./styles.css";
import Header from "../../../components/HomeComponents/Header/Index";

export default function Products() {
  return (
    <>
      {" "}
      <Header />
      <div className="des-container">
        <div className="bg-products">
          <div className="bg-navs">
            <NavLink
              to="computers"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Computadores
            </NavLink>
            <NavLink
              to="eletronics"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Eletrônicos
            </NavLink>
            <NavLink
              to="books"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Livros
            </NavLink>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
