"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, FileText, Mail } from "lucide-react";

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);

  const socialLinks = [
    {
      label: "Projects",
      href: "#projects",
      icon: FileText,
      target: "_self",
      rel: "",
    },
    {
      label: "GitHub",
      href: "https://github.com/naveen",
      icon: Github,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      label: "Contact",
      href: "mailto:hello@naveen.dev",
      icon: Mail,
      target: "_blank",
      rel: "",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/naveen",
      icon: Linkedin,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  const roles = [
    "Fullstack Developer",
    "Smart Contract Engineer",
    "Open Source Contributor",
    "Ui/Ux designer",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stars = Array.from({ length: isMobile ? 80 : 200 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * (isMobile ? 2 : 3),
    delay: Math.random() * 5,
  }));

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-6 sm:mb-16 animate-float px-2">
          <h1 className="text-2xl xs:text-2xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 sm:mb-4">
            Naveen Manikandaraja
          </h1>

          <div className="h-16 xs:h-14 sm:h-16 md:h-20 relative">
            {roles.map((role, index) => (
              <p
                key={role}
                className={`text-sm xs:text-base sm:text-xl md:text-3xl text-cyan-200 font-mono absolute inset-0 transition-opacity duration-1000 ${
                  currentRole === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {role}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 w-full px-2 max-w-5xl">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.target}
              rel={link.rel}
              className="social-card group relative p-3 sm:p-6 hover:border-cyan-400 transition-all duration-300 w-full xs:w-auto"
            >
              <div className="absolute inset-0 bg-cyan-400/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <link.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-1 sm:mb-2 mx-auto transition-all group-hover:scale-110 text-cyan-400" />
              <span className="text-xs sm:text-sm md:text-base font-mono text-center block">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <div className="fixed bottom-4 md:bottom-6 left-0 right-0 text-center text-[10px] xs:text-xs sm:text-sm md:text-base text-cyan-400/60 font-mono animate-pulse px-2">
          Crafting the future with code & innovation
        </div>
      </div>

      <style jsx global>{`
        .social-card {
          border: 1px solid rgba(34, 211, 238, 0.2);
          border-radius: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          min-width: 100px;
          max-width: 180px;
          margin: 0 auto;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          flex: 1 1 auto;
        }

        @media (max-width: 640px) {
          .social-card {
            padding: 0.75rem;
            min-width: calc(50% - 0.5rem);
            max-width: calc(50% - 0.5rem);
          }

          .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }

          .xs\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 380px) {
          .social-card {
            min-width: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
