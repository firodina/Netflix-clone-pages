import React from "react";
import "../Header/header.css";
import netflixlog from "../../image/Netflix-logo (2).png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function Header() {
  return (
    <div>
      <div className="outer-header-contaner">
        <div className="header-contaner">
          <div className="inner-contaner">
            <ul>
              <li>
                <img src={netflixlog} alt="netflixlog" width={100} />
              </li>
              <li>Home</li>
              <li>TV&Show</li>
              <li>Movies</li>
              <li>Lastest</li>
              <li>MyList</li>
              <li>Browser by Languages</li>
            </ul>
          </div>
          <div className="left-contaner">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
