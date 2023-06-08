import React from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-3">
            <h3 className={`${style.h3} pb-3`}>About us...</h3>
            <p className={`${style.p}`}>Noxy is a website to watch trending movies and series in high quality and any time you like.<br></br><br></br>We are always available to help in the event of any glitch, you can contact us directly in case something goes wrong.</p>
          </div>
          <div className="col-md-3">
            <h3 className={`${style.h3} pb-3`}>Join us...</h3>
            <p className={`${style.p}`}>Join us now and log in to watch the latest and most popular movie and TV shows.<br></br><br></br>And to receive all new first hand</p>
          </div>
          <div className="col-md-3">
            <h3 className={`${style.h3} pb-3`}>Contact details...</h3>
            <ul>
              <li><Link className={`${style.link}`}><i className="fa-solid fa-envelope mx-1"></i>noxe@gmail.com</Link></li>
              <li><Link className={`${style.link}`}><i className="fa-brands fa-facebook-f mx-1"></i>movie-noxe</Link></li>
              <li><Link className={`${style.link}`}><i className="fa-brands fa-linkedin-in mx-1"></i>movie-noxe</Link></li>
            </ul>
          </div>
          <div className="col-md-3 py-5">
            <Link className={`${style.link1} px-2 py-2 rounded`}><i className={`${style.faa} fa-brands fa-google-play mx-2`}></i>Google Play</Link><br></br><br></br>
            <Link className={`${style.link1} px-2 py-2 rounded`}><i className={`${style.faa} fa-brands fa-apple mx-2`}></i>App Store</Link>
          </div>
        </div>
      </div>
      <div className={`${style.bg}`}>
        <p className={`${style.p} py-3`}>Copuright &copy; 2022 by noxe</p>
      </div>
    </>
  )
}

export default Footer