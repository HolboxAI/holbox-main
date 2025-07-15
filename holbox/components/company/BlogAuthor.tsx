'use client';

import Image from 'next/image';

interface BlogAuthorProps {
  author: string;
  date: string;
  avatar?: string;
}

export const BlogAuthor = ({ author, date, avatar = '/images/author.jpg' }: BlogAuthorProps) => {
  return (
    <div className="flex items-center gap-3 pt-4">
      <Image
        src={avatar}
        alt="Author"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div>
        <p className="font-semibold text-blue-600">{author}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};
