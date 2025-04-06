import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HomeIcon, ArrowRightIcon } from "lucide-react";

export default function NotFound() {
  const particles = Array.from({ length: 30 }).map((_, i) => {
    const size = Math.random() * 4 + 1;
    const color =
      Math.random() > 0.7
        ? "bg-purple-400"
        : Math.random() > 0.4
        ? "bg-blue-400"
        : "bg-white";

    return {
      id: i,
      size,
      color,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10,
    };
  });

  const orbitParticles = Array.from({ length: 12 }).map((_, i) => {
    const size = Math.random() * 2 + 1;
    const color =
      i % 3 === 0 ? "bg-purple-400" : i % 2 === 0 ? "bg-blue-400" : "bg-white";

    return {
      id: `orbit-${i}`,
      size,
      color,
      angle: i * 30 + Math.random() * 15,
      speed: 20 + Math.random() * 10,
      delay: Math.random() * 2,
    };
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-600 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-blue-600 blur-3xl animate-pulse delay-300"></div>
        <div className="absolute top-2/3 left-2/3 w-28 h-28 rounded-full bg-indigo-600 blur-3xl animate-pulse delay-700"></div>
      </div>

      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full ${particle.color} opacity-70`}
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-2xl flex flex-col items-center">
        <div className="mb-8 relative">
          <div className="absolute -inset-8 rounded-full border border-blue-400/20 animate-spin-slow pointer-events-none">
            {orbitParticles.map((particle) => (
              <div
                key={particle.id}
                className={`absolute rounded-full ${particle.color} opacity-80`}
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${particle.angle}deg) translate(100px) rotate(-${particle.angle}deg)`,
                  animation: `orbit ${particle.speed}s linear ${particle.delay}s infinite`,
                }}
              />
            ))}
          </div>

          <div className="animate-float">
            <Image
              src="/octo.png"
              width={180}
              height={180}
              alt="Lost Octopus"
              className="rounded-full shadow-lg border-2 border-blue-400/30 z-10 relative"
              priority
            />
          </div>
        </div>

        <h1 className="text-9xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          404
        </h1>

        <p className="text-2xl mb-6 font-medium">
          Oops! Looks like you got lost in the cosmic void...
        </p>

        <p className="text-lg mb-8 opacity-90 max-w-md mx-auto">
          The page you re looking for has been swallowed by a black hole. But
          don t panic! Our interdimensional octocat will teleport you home.
        </p>

        <Link href="/" passHref>
          <span className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium transition-all duration-300 group shadow-lg hover:shadow-blue-500/40 text-lg">
            <HomeIcon className="mr-3 h-5 w-5" />
            Beam Me Home
            <ArrowRightIcon className="ml-3 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2" />
          </span>
        </Link>
      </div>
    </div>
  );
}
