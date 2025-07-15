'use client';
import Image from 'next/image';

interface BlogImageProps {
  src: string;
  alt: string;
}

export const BlogImage = ({ src, alt }: BlogImageProps) => {
  return (
    <div className="overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={300}
        className="transition-transform duration-300 ease-in-out hover:scale-105 rounded-2xl"
      />
    </div>
  );
};
