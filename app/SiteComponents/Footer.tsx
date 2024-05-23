import React from 'react'

import facebookIcon from '../../assets/images/facebookSvgRepo.svg';
import instaIcon from '../../assets/images/instagram-svgrepo-com.svg';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
const iconSize = 30
const iconColor = '#53212F';
function Footer() {
  return (
  
    <div className='footer bg-gray-800 w-screen py-[20px] text-white'>
        <div className='footer-container px-5 mx-auto'>

              {/* <img src={logo} className='footer-logo' /> */}

            {/* <div className='socials flex items-center space-x-4 justify-center'>
                <a className='facebook'  >
                <FaFacebookF size={iconSize} color={iconColor}/>
                </a>
                <a className='instagram' >
                <AiFillInstagram size={iconSize} color={iconColor}/>
              </a> 
                <a className='instagram' >
                <FaLinkedin size={iconSize} color={iconColor}/>
              </a> 
            </div> */}
        </div>
        <div className='bottom-footer mx-auto text-center  font-primary text-sm font-light'>
        &copy; 2024 | Alexander Martin Campaign | Website by Vision Webworks
        </div>
   </div>
  )
}

export default Footer