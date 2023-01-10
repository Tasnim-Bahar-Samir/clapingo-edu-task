import React from 'react'
import { FaApple, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaMobileAlt } from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import {GrMail} from 'react-icons/gr'
import logo from '../../assets/images/Clapingo Logo.png'
import playstore from '../../assets/images/playstore.png'

const Footer = () => {
  return (
    <div className='' style={{backgroundColor:'#001F27'}}>
        <footer className="footer p-10 text-white">
  <div>
    <img src={logo} alt="" />
    <p className='md:w-[255px]'>Clapingo is  a unique platform where you practise conversations live with various speakers across the country. This is a judgment-free space where people can freely speak with a diverse set of people from different backgrounds.</p>
    <div className='flex gap-2'>
        <a className='text-xl' href="https://www.facebook.com/profile.php?id=100045078463296" target='_blank'><FaFacebookSquare/></a>
        <a className='text-xl' href="https://github.com/Tasnim-Bahar-Samir" target='_blank'><FaGithubSquare/></a>
        <a className='text-xl' href="https://www.linkedin.com/in/tasnim-bahar-sameer/" target='_blank'><FaLinkedin/></a>
        <a className='text-xl' href="https://www.instagram.com" target='_blank'><FaInstagramSquare/></a>
    </div>
  </div> 
  <div>
    <span className="footer-title">Reach Us</span> 
    <a className="link link-hover flex items-center gap-1"><GrMail className='color-primary'/> hello@clapingo.com</a> 
    <a className="link link-hover flex items-center gap-1"><FaMobileAlt className='color-primary'/> +91 6366937113</a> 
    <a className="link link-hover flex items-center gap-1"><HiLocationMarker className='color-primary'/> 772 Lyonwood Ave
Walnut, CA 91789</a> 
  </div> 
  <div>
    <span className="footer-title">Quick Links</span> 
    <a className="link link-hover">Blogs</a> 
    <a className="link link-hover">Plans and Pricing</a> 
    <a className="link link-hover">Signin/Login</a> 
    <a className="link link-hover">Teach with us</a>
  </div> 
  <div>
    <span className="footer-title">Install App</span> 
    <a className="link link-hover p-2 rounded-md bg-black flex gap-2 items-center w-44"><img className='w-6' src={playstore} alt="" /> <div>
        <p className='text-[12px]'>Get It On</p>
        <h5 className='text-xl font-bold'>Google Play</h5>
        </div></a> 
    <a className="link link-hover p-2 rounded-md bg-black flex items-center gap-2 w-44"><FaApple className='text-2xl'/> <div>
        <p className='text-[12px]'>Download On The</p>
        <h5 className='text-xl font-bold'>App Store</h5>
</div></a> 
        <p>Comming Soon!</p>
  </div>
</footer>
    </div>
  )
}

export default Footer