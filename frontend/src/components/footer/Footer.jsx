import React from "react";

const Footer = () => {

    return <footer>
    <div className="container-footer">
      <h1>Krish<span>4lex</span></h1>

      <div className="flex items-center justify-evenly">
        <a href="About"> About</a>
        <a href="About"> Projects</a>
        <a href="About"> Services</a>
      </div>

      <div className="icon-media">
        <a href=""><img src="src/assets/facebook.png" alt="" /></a>
        <a href=""><img src="src/assets/twitter.png" alt="" /></a>
        <a href=""><img src="src/assets/linkedin.png" alt="" /></a>
        <a href=""><img src="src/assets/instagram.png" alt="" /></a>
      </div>
      
      <p><small>@Krish4lex All Right Resrved</small></p>
    </div>
  </footer> ;
}

export default Footer