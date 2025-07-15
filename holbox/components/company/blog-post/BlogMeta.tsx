interface BlogMetaProps {
    date: string;
  }
  
  export const BlogMeta = ({ date }: BlogMetaProps) => {
    return (
      <p className="text-sm text-gray-500 mt-4">{date}</p>
    );
  };
  