"use client";
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import axios from "axios";
import Link from "next/link";
import { Pagination } from "flowbite-react";
import Footer from "../components/Footer";

type Post = {
  id: number;
  title: string;
  description: string;
};

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>("/api/posts");
        setPosts(response.data);
      } catch (err) {
        setError("Error fetching posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const truncateDescription = (description: string) => {
    if (description.length > 100) {
      return description.substring(0, 150) + "...";
    }
    return description;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-500">
      <div className="w-full bg-gray-800 text-white rounded-lg shadow-lg p-6">
        <div className="text-center py-4">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <h1>
              <p className="text-2xl text-blue-700">Blog</p>
              <p className="text-4xl font-bold text-blue-300">
                Quality Assurance
              </p>
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-8">
        {currentPosts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div className="mb-4 p-4 bg-white shadow-md rounded hover:bg-gray-400">
              <h2 className="text-2xl font-bold text-black text-center">
                {post.title}
              </h2>
              <p className="text-gray-500 ">
                {truncateDescription(post.description)}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(posts.length / postsPerPage)}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  );
};

export default Home;
