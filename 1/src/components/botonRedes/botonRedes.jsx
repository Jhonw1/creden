import React from 'react'
import './botonRedes.css'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export const BotonRedes = () => {
  return (
    <>
    <div className="social-sidebar-container">
  <div className="social-sidebar">
    <Link to="https://www.tiktok.com/@facilisimo_oficial?lang=es" target='_blank' className="social-icon"><i><FaTiktok /></i></Link>
    <Link to="https://www.facebook.com/facilisimo.oficial" target='_blank' className="social-icon"><i><FaFacebookF /></i></Link>
    <Link to="https://www.instagram.com/facilisimo.oficial/" target='_blank' className="social-icon"><i><FaInstagram /></i></Link>
    <Link to="https://www.youtube.com/@facilisimo3196" target='_blank' className="social-icon"><i><FaYoutube /></i></Link>
  </div>
</div>
</>
  )
}
