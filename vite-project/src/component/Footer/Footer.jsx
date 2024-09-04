import React from 'react'
import './Footer.css'
import {assets} from "../../assets/assets.js";

function Footer() {
  return (
      <div className={'bg-dark f '} id={'footer'}>
        <div className={'footer container '}>
          <div className={'footer_content row '}>
            <div className={'footer-left col-md-5 pe-5'}>
              <img src={assets.logo} alt={'logo '} className={'mb-3 l'}/>
              <p>
                Using color to add meaning only provides a visual indication, which will not be conveyed to users of
                assistive technologies – such as screen readers. Ensure that information denoted by the color is either
                obvious from the content itself (e.g. the visible text)
              </p>
              <div className={'d-flex links'}>
                <img src={assets.facebook_icon} className={''}/>
                <img src={assets.twitter_icon} className={'ms-2 me-2'}/>
                <img src={assets.linkedin_icon} className={''}/>
              </div>
            </div>
            <div className={'footer-center col-md-3'}>
              <h2>company</h2>
              <ul>
                <li>home</li>
                <li>about us</li>
                <li>delivery</li>
                <li>privacy policy</li>
              </ul>
            </div>
            <div className={'footer-right col-md-4'}>
              <h2>get in touch</h2>
              <ul>
                <li>+1-212-456-7890</li>
                <li>contact@example.com</li>

              </ul>
            </div>

          </div>
          <div className={''}>
            <p className={'text-center mt-5'}>copyright 2024 &copy; react.com - all right reserved.</p>
          </div>
          <hr className={'bg-light border-1 h-25 mt-5'}/>
        </div>

      </div>
  )
}

export default Footer
