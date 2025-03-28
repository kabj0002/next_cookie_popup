"use client";

const CookieFooter = ({ cookiesAccepted, setCookiesAccepted }) => {
  console.log(setCookiesAccepted);
  return (
    <div>
      <p>We use cookies to improve your user experience.</p>
      <button onClick={() => setCookiesAccepted(!cookiesAccepted)}>
        I like Cookies
      </button>
    </div>
  );
};

export default CookieFooter;
