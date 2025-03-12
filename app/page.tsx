'use client'

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-800 to-purple-900">
      {/* Background art elements */}
      <div
        className="absolute w-64 h-64 rounded-full bg-pink-500 opacity-20 blur-3xl"
        style={{
          left: `${mousePosition.x / 10}px`,
          top: `${mousePosition.y / 10}px`
        }}
      />
      <div className="absolute w-96 h-96 rounded-full bg-yellow-300 opacity-10 blur-3xl top-10 -left-20" />
      <div className="absolute w-80 h-80 rounded-full bg-blue-400 opacity-20 blur-3xl bottom-10 right-10" />

      <Head>
        <title>Art Portfolio</title>
        <meta name="description" content="Custom art and design projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
       <div className="w-64 md:w-80 mb-12 relative">
                 <Image
                   src="/logo.svg"
                   alt="Art Studio Logo"
                   width={450}
                   height={200}
                   priority
                   className="drop-shadow-lg"
                 />
               </div>

                <div className="mt-12 flex flex-col md:flex-row gap-6 items-center justify-center">
                  {/* Using a fixed width container for both boxes */}
                  <div className="w-full md:w-64 lg:w-80 lg:h-50">
                    <Link href="https://epohastudio.etsy.com" passHref>
                      <div className="group cursor-pointer h-full">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 md:p-12 transition-all duration-300 hover:bg-white/20 text-center h-full flex flex-col justify-center">
                          <span className="text-2xl md:text-3xl font-light text-white group-hover:text-yellow-200 transition-colors">
                            zum Shop
                          </span>
                          <div className="mt-4 h-1 w-0 bg-gradient-to-r from-pink-500 to-yellow-500 group-hover:w-full transition-all duration-500"></div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="w-full md:w-64 lg:w-80 lg:h-50">
                    <Link href="https://www.instagram.com/epoha.studio?igsh=dDRocDh1M2xidHg0&utm_source=qr" passHref>
                      <div className="group cursor-pointer h-full">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 md:p-12 transition-all duration-300 hover:bg-white/20 text-center h-full flex flex-col justify-center">
                          <span className="text-2xl md:text-3xl font-light text-white group-hover:text-cyan-200 transition-colors">
                            individualisierte Kunst
                          </span>
                          <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500"></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

        <p className="mt-16 text-white/60 text-center text-sm md:text-base max-w-md">
          Custom-made art pieces and products created with passion and imagination
        </p>
      </main>
    </div>
  );
}