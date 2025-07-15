interface BlogTitleProps {
  title: string;
}

export const BlogTitle = ({ title }: BlogTitleProps) => {
  return (
    <h3 className="text-lg font-bold text-slate-900 mt-2 leading-snug group-hover:text-blue-600 transition-colors duration-300">
      {title}
    </h3>
  );
};
