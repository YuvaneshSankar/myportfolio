import {
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
  } from "react-icons/fa";
  
  const socialLinks = [
    { href: "https://github.com/YuvaneshSankar", icon: FaGithub },
    { href: "https://www.linkedin.com/in/yuvanesh-sankar/", icon: FaLinkedin },
    { href: "https://x.com/its_not_yuvi", icon: FaTwitter },
    { href: "https://www.instagram.com/im_yuvi.7/", icon: FaInstagram },
  ];
  
  const Footer = () => {
    return (
      <footer className="w-screen bg-[#5542ff] py-4 text-black">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          
          {/* Left Text */}
          <p className="text-center text-sm font-light md:text-left">
            © 2025 Yuvanesh
          </p>
  
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-black hover:text-white transition-colors duration-300 text-2xl"
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
  
          <a
            className="text-center text-sm font-light hover:underline md:text-right pr-4"
          >
            Get in Touch
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  