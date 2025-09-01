This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Optimization Techniques
Fast hero: On phones show a small image, on desktop play a silent, looping video with a poster. The video < 5 MB.

Smart images: Used next/image with WebP

Tiny JS: Make components server-side where possible, avoiding heavy libs, keeping the CTA simple.

Accessible by default: Semantic tags (header/main/section), meaningful alt, visible focus, good contrast.

Tailwind only: Prettier + Tailwind plugin 

##  Lighthouse performance scores 
[Download Lighthouse screenshot](<Lighthouse docs/mobile-lighthouse.png>)

[Download Lighthouse screenshot](Lighthouse%20docs/mobile-lighthouse.png)
