import React from 'react'
import { Helmet } from 'react-helmet';
import '../Styles/header.css'

const Header = () => {
  return (
    <div>
        <div className='header1'>
        <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
            <nav>
                <ul className='header-ul'>
                <li><a href="">Find Jobs</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Job Seekers</a></li>
                <li><a href="">Employers</a></li>
                <li><a href="">Conctact Us</a></li>
                <li><a href="">Create Your CV</a></li>
            </ul>
             </nav>
        </div>
    </div>
  )
}

export default Header