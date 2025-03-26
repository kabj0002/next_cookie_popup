"use client";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";

//import { useState } from "react";

const Cookies = () => {
  return (
    <div class="cookies">
      <div class="icons">
        <LiaCookieBiteSolid class="cookie-icon" />
        <RxCross2 />
      </div>
      <div>
        <p>We use cookies to improve your user experience.</p>
        <button>I like Cookies</button>
      </div>
    </div>
  );
};

export default Cookies;
