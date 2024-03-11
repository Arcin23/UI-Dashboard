import React from 'react'
import { BiHelpCircle,BiBell,BiUserCircle

} from 'react-icons/bi'

const Profile = () => {
  return (
    <div className='icons'>
        <a className='item'> 
          <BiHelpCircle href='#' className='profile-icon'/>
          <BiBell href='#' className='profile-icon'/>
          <BiUserCircle href='#' className='profile-icon'/>
         
                
        </a>
      
    </div>
  )
}

export default Profile
