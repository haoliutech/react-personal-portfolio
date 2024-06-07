import { FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa6";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { animate } from 'framer-motion';

export default function Navbar(){
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          animate(window.scrollY, top, {
            duration: 0.8,
            ease: [0.22, 0.61, 0.36, 1],
            onUpdate: (latest) => window.scrollTo(0, latest),
          });
        }
      };

      const scrollToTop = () => {
        animate(window.scrollY, 0, {
          duration: 0.8,
          ease: [0.22, 0.61, 0.36, 1],
          onUpdate: (latest) => window.scrollTo(0, latest),
        });
    }

    const openInNewTab = (url:string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    

    
    return (
        <div className="navbar bg-base-100 fixed top-0 z-10 glass">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mx-0 px-1">
              <HiOutlineMenuAlt1 className="text-2xl"/>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
                <li><button onClick={()=>scrollToTop()} className="text-xl">Home</button></li>
                <li><button className="text-xl" onClick={()=>openInNewTab("https://www.dropbox.com/scl/fi/8hc6xkffqibj8my3up6ul/HaoLiuCV_5june2024.pdf?rlkey=twg3vx7th3du3ef9x99bym8iv&st=e7nvru3i&dl=0")}>Resume</button></li>
                <li><button onClick={()=>scrollToSection("projects")} className="text-xl">Projects</button></li>
                <li><button onClick={()=>scrollToSection("contact")} className="text-xl">Contact</button></li>
            </ul>
          </div>
            <div className="flex-1 mx-0">
                <button onClick={scrollToTop} className="btn btn-ghost text-3xl mx-0 px-1">&lt;Hao Liu&gt;</button>
            </div>

            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <li><button onClick={()=>scrollToTop()} className="text-xl">Home</button></li>
                    <li><button className="text-xl" onClick={()=>openInNewTab("https://www.dropbox.com/scl/fi/8hc6xkffqibj8my3up6ul/HaoLiuCV_5june2024.pdf?rlkey=twg3vx7th3du3ef9x99bym8iv&st=e7nvru3i&dl=0")}>Resume</button></li>
                    <li><button onClick={()=>scrollToSection("projects")} className="text-xl">Projects</button></li>
                    <li><button onClick={()=>scrollToSection("contactform")} className="text-xl">Contact</button></li>
                
            
                </ul>
                <button>
                <FaLinkedinIn onClick={()=>openInNewTab("https://www.linkedin.com/in/haoliutech/")} className="m-2 w-8 h-8"/>
                </button>
                <button>
                <FaGithub onClick={()=>openInNewTab("https://github.com/haoliutech")} className="m-2 w-8 h-8 hidden lg:flex"/>
                </button>
                <button>
                <FaYoutube onClick={()=>openInNewTab("https://youtube.com/@haoliutech?si=X4MbiW7kON3XgQX2")} className="m-2 w-8 h-8 hidden lg:flex"/>
                </button>
               
            </div>
            </div>
    )
}