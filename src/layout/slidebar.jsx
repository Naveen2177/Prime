import React from "react";
import Img1 from "../images/movies/2030091.jpg";
import Img2 from "../images/movies/pushpa.jpg";
import Img3 from "../images/movies/NBK107-movie-title-revealed.jpg";
import Img4 from "../images/movies/kabzaa-review-1200.jpg";
import Img5 from '../images/movies/1-beemilli.jpg'
import "../styles/slid.css";

const Slidebar = () => {
  return (
    <div>
      <div id="slider">
        <figure>
          <img src={Img1} alt="" />
          <div className="para">
            <h1>PLANE</h1>
            <h6>English | Hindi | Tamil | Telugu</h6>

            <p>
              <a className="text-warning">
                <i class="fas fa-shopping-bag"></i>
              </a>
              Subscribe to Lionsgate Play for <br />
              ₹633/year
            </p>

            <button className="px-3 py-2 rounded but">More Details</button>

            <span>
              <a href="#" className="text-white p-2">
                <i class="fa-sharp fa-solid fa-circle-plus fa-2xl"></i>
              </a>
            </span>
            <span>
              <a href="#" className="text-white">
                <i class="fa-solid fa-circle-info fa-2xl"></i>
              </a>
            </span>
          </div>
         
         <img src={Img2} alt="" />
            <div className="p text-bolder">
            <p>
            <i class="fa-solid fa-triangle-exclamation"></i>
              <h3>
                YOUR PRIME MEMBERSHIP
                <br />
                <p className="text-center">
                IS EXPIRING SOON!
                </p>
              </h3>
            </p>
            
            <h4 className="txt text-center">LIMITED PERIOD OFFER</h4>
            <h1>RENEW AT <s style={{color:'orange'}}>₹1,499</s> ₹1,399/YEAR</h1>
            <button className="b px-3 py-2 rounded">Renew Now</button>
          </div> 

          <img src={Img3} alt="" />
          <img src={Img4} alt="" />
          <img src={Img5} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Slidebar;
