import React from "react";
import Logo from "../images/prime-removebg-preview.png";
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className="text-center">
      <div className="logo">
        <img src={Logo} alt="" style={{ width: "150px", height: "150px" }} />
      </div>
      <div className="footer fw-bold">
        <ul className="d-flex gap-3">

          <li className="list-unstyled">
            <a href="#" className="text-decoration-none">Terms and Privacy</a>
          </li>

          <li className="list-unstyled ">
            <a href="#" className="text-decoration-none">Send us feedback</a>
          </li>

          <li className="list-unstyled">
            <a href="#" className="text-decoration-none">Help</a>
          </li>

          <li className="list-unstyled text-white"><i class="fa-regular fa-copyright"></i>1996-2023,Amazon.com,inc or its affiliates</li>

        </ul>
      </div>
    </div>
  );
};

export default Footer;
