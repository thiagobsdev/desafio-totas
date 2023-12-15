import { NavLink } from "react-router-dom";
import "../HeaderNav/styles.css";

import homeImg from "../../../../assets/Vector.png";

export default function HeaderNav() {
  return (
    <div className="flex-header">
      <div className="nav-flex">
        <div className="nav-bar">
          <NavLink
            to="/home"
            className={({isActive, isPending}) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            Início
          </NavLink>
          <NavLink to="/products/computers"  className={({isActive, isPending}) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
           >
            Produtos
            </NavLink>
          <NavLink to="/about"  className={({isActive, isPending}) =>
              isActive ? "active" : isPending ? "pending" : ""
            }>
            Sobre nós
            </NavLink>
        </div>
      </div>
      <div className="div-img">
        <NavLink to="/home"><img src={homeImg} alt="Home" /></NavLink>
      </div>
    </div>
  );
}
