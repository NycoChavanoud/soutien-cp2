import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">
        <div
          style={{
            backgroundColor: "black",
            color: "whitesmoke",
            fontSize: "1.4em",
            textAlign: "center",
            marginTop: "0px",
            height: "75px",
            cursor: "pointer",
          }}
        >
          <h1>SOUTIEN WILD CP2 - GOT</h1>
        </div>
      </Link>
    </>
  );
};

export default Header;
