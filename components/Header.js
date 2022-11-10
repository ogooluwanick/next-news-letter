import React from 'react'
import headerStyles from "../styles/Header.module.css"


const Header = () => {
  return (
        <>
                <h1 className={headerStyles.title}>
                        <span>🌹O.G.O🌹</span> News
                </h1>
                <p className={headerStyles.description}>
                        Keep up with all the latest news from your friendly neighbourhood developer.
                </p>
        </>

  )
}

export default Header