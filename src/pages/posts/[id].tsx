import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  description: string;
};

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await axios.get<Post>(`/api/posts/${id}`);
          setPost(response.data);
        } catch (err) {
          setError("Error fetching post");
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col items-center text-center justify-center min-h-screen bg-gray-400">
      <div className="block max-w-sm p-6 bg-gray-600 border border-gray-300 rounded-lg shadow ">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {post?.title}
        </h3>
        <p className="font-normal text-gray-200 ">{post?.description}</p>
      </div>
    </div>
  );
};

export default PostPage;
