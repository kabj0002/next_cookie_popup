"use client";
import { useState } from "react";
import CookieHeader from "./CookieHeader";
import CookieFooter from "./CookieFooter";

const Cookies = () => {
  const [cookiesAccepted, setCookiesAccepted] =
    useState(false); /*Cookies er ikke accepteret endnu af brugeren*/
  console.log(cookiesAccepted);
  return (
    /*Gør at cookie-box forsvinder når den er true */
    !cookiesAccepted && (
      <div className="cookies">
        <CookieHeader />
        <CookieFooter
          cookiesAccepted={cookiesAccepted}
          setCookiesAccepted={setCookiesAccepted}
        />
      </div>
    )
  );
};

export default Cookies;
