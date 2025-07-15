'use client';

import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';
import { BlogText } from './BlogText';
import { BlogAuthor } from './BlogAuthor';
import { BlogImage } from './BlogImage';

interface BlogCardProps {
  title: string;
  summary: string;
  image: string;
  author: string;
  date: string;
  slug: string;
  avatar?: string;
}

export default function BlogCard({
  title,
  summary,
  image,
  author,
  date,
  slug,
  avatar,
}: BlogCardProps) {
  return (
    <FadeIn>
      <Link href={`/blog/${slug}`} className="block">
        <div className="group flex flex-col md:flex-row items-center gap-6 rounded-xl p-6 hover:bg-gray-50 transition">
          <BlogImage src={image} alt={title} />
          <div className="w-full md:w-1/2 flex flex-col justify-center h-full">
            <BlogText title={title} summary={summary} />
            <BlogAuthor author={author} date={date} avatar={avatar} />
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}
