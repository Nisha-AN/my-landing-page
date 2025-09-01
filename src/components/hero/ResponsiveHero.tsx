'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ResponsiveHero() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  return (
    <header
      aria-label="Hero"
      className="relative isolate h-[80vh] min-h-[520px] w-full overflow-hidden"
    >
      {isDesktop ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/poster.webp"
        >
          <source src="/bg.webm" type="video/webm" />
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      ) : (
        <Image
          src="/mobile.webp"
          alt="Product background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Breathe. Relax. 
          </h1>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl whitespace-nowrap">
            Discover the Waves.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            Crafting digital experiences with the calm of the coast.
          </p>
          <a
            href="#features"
            className="mt-6 inline-flex items-center rounded-xl bg-white px-5 py-3 font-medium text-gray-900 transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
