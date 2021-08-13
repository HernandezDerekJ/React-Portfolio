import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./foot.css";

function Foot() {
  return (
    <footer className="footer">
      <div className="container">
        <h6 id = "footer_sign">
          Designed/Built/Tested by Derek Hernandez
        </h6>
        <h6 id = "footer_sign_git">
          GIT: HernandezDerekJ
        </h6>
      </div>
    </footer>
  );
}

export default Foot;
