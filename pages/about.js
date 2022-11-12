import React from 'react'
import Meta from '../components/Meta'
import articleIdStyle from "../styles/ArticleID.module.css"



const about = () => {
  return (
        <div className={articleIdStyle.card}>
                <Meta title="About"/>
                <h1>About</h1>
                <p>Web/Software Developer with High Honors in Information Technology. Passionate about solving problems with the use of software and gaining more experience building easy-to-use, responsive, accessible, and user-friendly websites and web applications. Highly focused on bringing value to any team I am a part of and I also believe in the team building. I&apos;m always ready to learn from team-mates as well as assist in team activities.
                       <br /><br /> Skills: JavaScript, ReactJS, React Native, SQL, HTML, CSS, SASS, jQuery, Bootstrap, Redux, Laravel, Typescript,Python</p>
        </div>
  )
}

export default about