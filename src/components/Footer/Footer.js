import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer bg-orange'>
      <div className = "container py-4 text-center">
        <div className='flex align-center justify-center text-white fw-3 fs-14'>
          <Link to = "/" className='text-uppercase'>Terms of Agreement</Link>
          <div className='vert-line'></div>
          <Link to = "/" className='text-uppercase'>Privacy Policy</Link>
          <div className='vert-line'></div>
          <Link to = "/" className='text-uppercase'>About Maitreya's Ecommerce Application</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer