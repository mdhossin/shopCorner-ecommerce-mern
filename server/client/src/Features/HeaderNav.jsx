import React from "react";
import MenuItem from "./MenuItem";
import { useState } from "react";
// import Cart from "./Cart";
const HeaderNav = () => {
  const [dropdown, setDropdown] = useState(false);

  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(false);
  };
  return (
    <header className="headers">
      <nav className="headernav container-div">
        <div className="logo">
          <a href="#home">Logo</a>
        </div>

        <ul className="headernav__list">
          <li className="headernav__list__item">
            <a href="home">Home</a>
          </li>
          <li className="headernav__list__item">
            <a href="home">About</a>
          </li>
          <li className="headernav__list__item">
            <a
              href="#home"
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => {
                setDropdown((prev) => !prev);
              }}
            >
              Services
            </a>

            <MenuItem
              show={dropdown}
              onClickOutside={() => {
                setDropdown(false);
              }}
              dropdown={dropdown}
              setDropdown={setDropdown}
            />
          </li>
          <li className="headernav__list__item">
            <a
              href="#home"
              aria-expanded={isCartOpen ? "true" : "false"}
              onClick={() => {
                setCartOpen((prev) => !prev);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* hidden cart drawer */}
      <div className={isCartOpen ? "mini-cart-open" : "hidden-mini-cart"}>
        <div className="mini-cart">
          {/* <Cart setCartOpen={setCartOpen} isCartOpen={isCartOpen} /> */}
        </div>
        <div
          className={
            isCartOpen ? "drawer-backdrop dark-overflow" : "drawer-backdrop"
          }
          onClick={toggleCart}
        />
      </div>
    </header>
  );
};

export default HeaderNav;

// import React from "react";
// import MenuItem from "./MenuItem";
// import { useState } from "react";
// const HeaderNav = () => {
//   const [dropdown, setDropdown] = useState(false);
//   let [showInfo1, setShowInfo1] = useState(false);
//   return (
//     <header className="headers">
//       <nav className="headernav container-div">
//         <div className="logo">
//           <a href="#home">Logo</a>
//         </div>

//         <ul className="headernav__list">
//           <li className="headernav__list__item">
//             <a href="home">Home</a>
//           </li>
//           <li className="headernav__list__item">
//             <a href="home">About</a>
//           </li>
//           <li className="headernav__list__item">
//             <a
//               href="#home"
//               aria-expanded={dropdown ? "true" : "false"}
//               onClick={() => {
//                 setShowInfo1(true);
//               }}
//             >
//               Services
//             </a>

//             <MenuItem
//               show={showInfo1}
//               onClickOutside={() => {
//                 setShowInfo1(false);
//               }}
//               dropdown={dropdown}
//             />
//           </li>
//           <li className="headernav__list__item">
//             <a href="home">Contact</a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default HeaderNav;
