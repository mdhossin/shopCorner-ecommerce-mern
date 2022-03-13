import React, { useEffect, useRef } from "react";

const MenuItem = ({ dropdown, onClickOutside, setDropdown, show }) => {
  console.log(dropdown);

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!show) return null;
  return (
    <div className="dropdown">
      <ul ref={ref} className={`dropdown__menu ${dropdown ? "show" : ""}`}>
        <li>
          <a href="#home" onClick={() => setDropdown(false)}>
            web design
          </a>
        </li>
        <li>
          <a href="#home" onClick={() => setDropdown(false)}>
            web development
          </a>
        </li>
        <li>
          <a href="#home" onClick={() => setDropdown(false)}>
            SEO
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuItem;
