'use client';

import { BlogImage } from './BlogImage';
import { BlogMeta } from './BlogMeta';
import { BlogTitle } from './BlogTitle';

interface BlogCardProps {
  image: string;
  alt: string;
  date: string;
  title: string;
  description: string;
}

export const BlogPostCard = ({ image, alt, date, title, description }: BlogCardProps) => {
  return (
    <div className="max-w-sm bg-white p-4 rounded-2xl shadow-sm group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
      <BlogImage src={image} alt={alt} />
      <BlogMeta date={date} />
      <BlogTitle title={title} />
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};
