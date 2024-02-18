import React from "react";
import { Link } from "react-router-dom";
import service from "../appwrite/config";

//yeh $id is the id of full post card and featufredImage is the id of the Image
function PostCard({ $id, featuredImage, title }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-500 rounded-xl p-4">
        <div className="w-full justify-center mb-4 flex">
          <img
            src={service.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h1>${title}</h1>
      </div>
    </Link>
  );
}

export default PostCard;
