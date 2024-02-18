import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, PostForm } from "../src/components/index";
import { useParams } from "react-router-dom";
import service from "../src/appwrite/config";

function EditPosts() {
  const [post, setPost] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [navigate, slug]);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPosts;
