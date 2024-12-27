import React from "react";

const Footer = () => {
  return (
    <>
     <hr className="my-6 border-gray-300" />
      <footer className=" px-6 md:px-0 py-6">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
      {/* Social Links Section */}
      <div>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://linkedin.com/in/zahida-abbasi-2849012b0"
            className="text-black hover:text-black flex items-center gap-2 text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin text-decoration-none"></i>
            <span className="ml-2">LinkedIn</span>
          </a>
          <a
            href="https://github.com/zahida-abbasi"
            className="text-black hover:text-black flex items-center gap-2 text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github text-decoration-none ml-2"></i>
            <span className="ml-2">GitHub</span>
          </a>
        </div>
      </div>
    </div>

    {/* Footer Bottom Text */}
    <div className="mt-6 border-t border-gray-300 pt-4 text-center">
      <p className="text-sm">&copy; 2024 Zahida Abbasi. All Rights Reserved.</p>
    </div>
  </div>
</footer>

    </>
  );
};

export default Footer;
