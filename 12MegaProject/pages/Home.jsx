import React, { useState, useEffect } from "react";
import service from "../src/appwrite/config";
import { Container, PostCard } from "../src/components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        //actually jo getPosts hai iske method ka naam listdocuments hai
        //is liye .documents se nikal rahe hai posts
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1
                className="text-2xl font-bold
               hover:text-gray-500"
              >
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={posts.$id} className="p-2 w-1/4">
              <PostCard {...posts} />
              //hamne spread is liye kar tak ke saare posts ek hi baar mein
              chale jayen
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
