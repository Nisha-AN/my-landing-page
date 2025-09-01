import Image from 'next/image';

export default function FeatureRow({
  title,
  text,
  image,
  reverse = false,
}: {
  title: string;
  text: string;
  image: { src: string; alt: string; width: number; height: number };
  reverse?: boolean;
}) {
  return (
    <section
      className="mx-auto max-w-6xl px-6 py-16"
      aria-label={title}
    >
      <div
        className={`grid items-center gap-10 md:grid-cols-2 ${
          reverse ? 'md:[&>div:first-child]:order-2' : ''
        }`}
      >
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
          <p className="mt-4 text-gray-600">{text}</p>
        </div>
        <div className="relative">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
