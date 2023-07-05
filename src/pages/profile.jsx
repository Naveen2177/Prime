import React from 'react'
import Kid  from '../images/kid-1.png'
import '../styles/profile.css'

const Profile = () => {
  return (
    <div className='profile d-flex justify-content-center gap-5 '>
        <div>
            <h4>Your account</h4>
            <ul >
                <li>
                    <a href='#'> 
                        Help
                    </a>
                </li>
                <li>
                    <a href='#'>
                        Watch Anywhere
                    </a>
                </li>
                <li>
                    <a href='#'>
                        Account & Settings
                    </a>
                </li>
                <li>
                    <a href='#'>
                        Sign out
                    </a>
                </li>
            </ul>
        </div>
        <div className=''>
            <h4>
                Profiles
            </h4>
            <ul>
                <li>
                    <a href='#'>
                        <img src={Kid} alt='' style={{width:'25px'}}/>Kids
                    </a>
                </li>
                <li>
                    <a href='#'>
                    <i class="fa-solid fa-circle-plus fa-xl"></i>Add new
                    </a>
                </li>
                <li>
                    <a href='#'>
                        Manage profiles
                    </a>
                </li>
                <li>
                    <a href='#'>
                        Learn more
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Profile