import React from 'react'
// import {Link} from 'react-router-dom';
function Sidebar() {
  return (
    <>
    <div className="sidebar">
        <div className='up'> 
        <div style={{fontWeight:"500"}}>Setup</div>
        {/* <div className='subStyle'>      
            Interact 
        </div>
        <div className='subStyle'>AI Summaries</div> */}
        </div>
    </div>
</>
  )
}
export default Sidebar








// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
// }from "react-icons/fa";
// import { NavLink } from 'react-router-dom';
// const Sidebar = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         {
//             path:"/",
//             name:"AISummaries ",
//             icon:<FaTh/>
//         },
//         {
//             path:"/Interact",
//             name:"Interact",
//             icon:<FaUserAlt/>
//         },
        
//     ]
//     return (
//         <div className="container">
//            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//                <div className="top_section">
//                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//            </div>
//            <main>{children}</main>
//         </div>
//     );
// };
// export default Sidebar;