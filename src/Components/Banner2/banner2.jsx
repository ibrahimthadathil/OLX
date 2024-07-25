import React from 'react'
import './banner2.css'
export default function banner2() {
  return (
    <div>
      <div className="banner2">
        <div className="maindiv">
            <div className="banner">
                <img style={{height:'100%'}} src="../../../asset/phone-app.png" alt="" />
            </div>
            <div className="quote">
                <h1>TRY THE OLX APP</h1>
                <h6>Buy,sell and find just about anything using the app on your mobile</h6>

            </div>
            <div className="store">
                <h5>GET YOUR APP TODAY</h5>
                <div className="img">

                    <img  src="../../../asset/google-play-badge.png" alt="" />
                    <img src="../../../asset/app-store-badge.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
