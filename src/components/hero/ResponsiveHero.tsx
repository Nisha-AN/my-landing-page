import Image from 'next/image';

export default function ResponsiveHero() {
  return (
    <header
      aria-label="Hero"
      className="relative isolate h-[80vh] min-h-[520px] overflow-hidden"
    >
      <Image
        src="/mobile.webp"                
        alt="Beach background"
        fill
        priority                             
        sizes="100vw"
        className="object-cover md:hidden"
      />
      <video
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
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

   
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            <span className="block">Breathe. Relax.</span>
            <span className="block">Discover the Waves.</span>
          </h1>
          <p className="mt-4 text-lg text-white/90 md:text-xl">
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
