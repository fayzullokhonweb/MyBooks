import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center p-6   text-base-content">
      <div className=" h-0.5 bg-black -mb-10 opacity-20 w-4/5 "></div>
      <aside>
        <p className="text-lg font-sans font-normal ">
          © {new Date().getFullYear()} - All Copyrights Reserved By{" "}
          <a
            href="https://t.me/fayzullokhonweb"
            className="link no-underline hover:underline  text-sky-500"
          >
            Fayzullokhonweb
          </a>
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
