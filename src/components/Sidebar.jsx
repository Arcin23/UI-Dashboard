import React from 'react';
import { 
    BiHome, 
    BiSolidDashboard,   
    BiStats, 
    BiHelpCircle,
    BiLogOut,
    BiSolidCog,
    BiCubeAlt 
} from 'react-icons/bi';
 
const Sidebar = () => {
  return (
    <div className='menu'>
        <div className='logo'>
            <BiCubeAlt href='#' className='logo-icon'/><h2>Pro Manage</h2>
        </div>

        <div className='menu-list'>
            <a href='a' className='item'>
                <BiHome className='icon'/>
                Home
            </a>
            <a href='a' className='item'>
                <BiSolidDashboard className='icon'/>
                Dashboard
            </a>
            <a href='a' className='item'>
                <BiStats className='icon'/>
                Analytics
            </a>
            
            <a href='a' className='item'>
                <BiSolidCog className='icon'/>
                Settings
            </a>
            <a href='a' className='item'>
                <BiLogOut className='icon-logout'/>
                Log out
            </a>

        </div>
    </div>
  );
};

export default Sidebar;
