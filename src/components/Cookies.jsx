"use client";
import { useState } from "react";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";

//import { useState } from "react";

const Cookies = () => {
  const [cookiesAccepted, setCookiesAccepted] =
    useState(false); /*Cookies er ikke accepteret endnu af brugeren*/
  console.log(cookiesAccepted);
  return (
    /*Gør at cookie-box forvinder når den er true */
    !cookiesAccepted && (
      <div className="cookies">
        <div className="icons">
          <LiaCookieBiteSolid className="cookie-icon" />
          <RxCross2 />
        </div>
        <div>
          <p>We use cookies to improve your user experience.</p>
          <button onClick={() => setCookiesAccepted(!cookiesAccepted)}>
            I like Cookies
          </button>
        </div>
      </div>
    )
  );
};

export default Cookies;
