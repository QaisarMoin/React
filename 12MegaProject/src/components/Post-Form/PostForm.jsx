import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import service from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { UseSelector } from "react-redux";

function PostForm({ post }) {
  //yahi control ham pass karenge RTE mein tak pura control mil pye and {watch} hame capability deta hai continously watch karne ki kesi bhi cheez ko
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.state.userData);

  const submit = async (data) => {
    if (data) {
      data.image[0] ? service.uploadFile(data.image[0]) : null;
    }
  };

  return <div></div>;
}

export default PostForm;
