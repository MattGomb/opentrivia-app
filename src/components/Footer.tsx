import React from "react";

const Footer = () => {
  return (
    <section>
      <p className="footer text-sm italic">
        Powered by:{" "}
        <a
          href="https://opentdb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          opentdb.com
        </a>
      </p>
    </section>
  );
};

export default Footer;
