'use client';

import Image from 'next/image';

interface BlogImageProps {
  src: string;
  alt: string;
}

export const BlogImage = ({ src, alt }: BlogImageProps) => {
  return (
    <div className="w-full md:w-1/2 overflow-hidden rounded-xl group relative h-[400px]">
      <div className="h-full w-full overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-100 hover:scale-105">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  );
};
