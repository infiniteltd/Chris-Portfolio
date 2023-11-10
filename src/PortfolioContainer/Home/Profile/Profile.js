import React from 'react';
import Typical from "react-typical";
import ScrollService from '../../../Utilities/ScrollService';
import "./Profile.css";


export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://www.youtube.com/channel/UC7V9PH1vEBkhCrbqCNwdFyQ'>
                <i className='fa fa-youtube-square'></i>
              </a>
              <a href='https://twitter.com/Kris_Dev24' >
                <i className='fa fa-twitter'></i>
              </a>
              <a href='https://github.com/infiniteltd' >
                <i className='fa fa-github'></i>
              </a>
              <a href='https://linkedin.com/in/kriscodes' >
                <i className='fa fa-linkedin'></i>
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              {" "}
              Hi, I am <span className='highlighted-text'>Chris Sampson</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer 💻",
                    2000,
                    "FrontEnd Developer 🧑‍💻",
                    2000,
                    "Bootstrap/ FrontEnd Libraries 😎",
                    2000,
                    "Cross Platform Dev ✈️",
                    2000,
                    "React Dev 🌍",
                    2000,
                    "Self Taught Developer 🥷",
                    2000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                Knack of building applications with front and back end tech stacks.
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>

            <a href='Chris-main-resume.pdf' download='ChrisSampson Chris-main-resume.pdf'>

              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'>

          </div>
        </div>
      </div>
    </div>
  );
}
