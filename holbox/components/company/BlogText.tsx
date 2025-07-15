interface BlogTextProps {
    title: string;
    summary: string;
  }
  
  export const BlogText = ({ title, summary }: BlogTextProps) => {
    return (
      <div className="space-y-4">
        <p className="text-sm font-medium text-blue-500 uppercase">Blog</p>
        <h2 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors">
          {title}
        </h2>
        <p className="text-gray-600">{summary}</p>
      </div>
    );
  };
  