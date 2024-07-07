import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../Footer/footer.css";

function Footer() {
  return (
    <div className="outer-footer">
      <div className="outer-inner-footer">
        <h1>There’s even more to watch.</h1>
        <p>
          Netflix has an extensive library of feature films, documentaries, TV{" "}
          <br />
          shows, anime, award-winning Netflix originals, and more. Watch as{" "}
          <br /> much as you want, anytime you want.
        </p>
        <a href="#" className="btn btn-get-started btn-red btn-large">
          <button>Join Now</button>
        </a>
      </div>
      <div className="footer-inner-class">
        <div>
          <InstagramIcon />
        </div>
        <div>
          <FacebookOutlinedIcon />
        </div>
        <div>
          <YouTubeIcon />
        </div>
      </div>
      <div className="footer-date">
        <div>
          <ul>
            <li>Audio Describtion</li>
            <li>Invester Relation</li>
            <li>Legal Notice</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookies Perferencess</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Information</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contant us</li>
          </ul>
        </div>
      </div>
  <div className="footer">
  <div className="lastest-footer">
        <p>Service code</p>
      </div>
      <div className="copy-rigth"> &copy; 1997-2024 Netflix, Inc</div>
  </div>

    </div>
  );
}

export default Footer;
