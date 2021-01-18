import React from "react";
import "../Style.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <a href="https://github.com/julimalt?tab=repositories">
                Julimaalt
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
