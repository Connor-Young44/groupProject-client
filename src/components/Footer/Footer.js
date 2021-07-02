import React from "react"
import "./Footer.css"

export default function Footer() {
  return (
    <div>
      <div className="api-at">
        <span>Powered by</span>
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
          alt="api-attribution"
        ></img>
      </div>
      <div className="authors">
        <p>
          Developed <em>by</em> Connor, Rafael, Sentwali and Wojciech
        </p>
      </div>
    </div>
  )
}
