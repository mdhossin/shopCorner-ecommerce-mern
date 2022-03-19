import { CgProfile } from "react-icons/cg";
import { BiReceipt } from "react-icons/bi";
const sidebarNav = [
  {
    link: "/dashboard",
    section: "Profile",
    icon: <CgProfile />,
    text: "Profile",
  },
  {
    link: "/dashboard/orders",
    section: "orders",
    icon: <BiReceipt />,
    text: "Orders",
  },
  {
    link: "/dashboard/logout",
    section: "logout",
    icon: <i className="bx bx-receipt"></i>,
    text: "Logout",
  },
];

export default sidebarNav;
