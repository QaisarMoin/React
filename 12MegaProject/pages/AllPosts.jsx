import React, { useState, useEffect } from "react";
import service from "../src/appwrite/config";
import { Container, PostCard } from "../src/components";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);

  service.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
      //actually jo getPosts hai iske method ka naam listdocuments hai
      //is liye .documents se nikal rahe hai posts
    }
  });

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={posts.$id} className="p-2 w-1/4">
              <PostCard post={posts} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
