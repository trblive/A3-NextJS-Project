import React from "react";
import Link from 'next/link'
import menuItems from "../../data/common/menu-items.js"

const Navigation = () => {
     return (
         <nav className="navbar">
             <button id="nav-mobile-btn">
                 <i className="fa-solid fa-bars"></i>
             </button>
             <ul className="nav navbar-nav">
                 { menuItems.map((item) => (
                     <li key={item.id}>
                         <Link href={item.link}>{item.name}</Link>
                     </li>
                 ))}
             </ul>
         </nav>
     );
}

export default Navigation;