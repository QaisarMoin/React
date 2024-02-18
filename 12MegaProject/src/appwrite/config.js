import conf from "../conf/conf";
import { Client, Storage, Databases, ID, Query } from "appwrite";
//Query means hai filter kar ke do given condition mein

export class Service {
  client = new Client();
  databases;
  bucket;
  //account jab bann na chiyea jab new object bane tab he means yaha par bhi use hai constructor ka

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
    //bucket means Storage file rakh ne ke kiye
  }

  async createPost({ title, sulg, featuredImage, status, content, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        sulg, //documnet id ke jigha ham slug ko document id maan rahe hai
        {
          //jobhi itemse documnet banana hai usko likh do
          title,
          featuredImage,
          status,
          content,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost ::error", error);
    }
  }

  async updatepost(
    slug,
    { title, featuredImage, status, content } //update karne ke liye document id meanss slug ko alag se treat kar rahe hai
  ) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          //jo update karna hai iske andar likh do
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost ::error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost ::error", error);
      return false;
    }
  }

  async getPost(slug) {
    //single post lene ke liye hai
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost ::error", error);
      return false;
    }
  }

  async getPosts(
    queries = [Query.equal("status", "active")]
    // ye status ka naam APPWRITE ke index se match karna chiyea
  ) {
    // yaha par hame pure posts chiyea but jis ka status is eqaul to active hai bas unko list karwana hai (means yaha par QUERY use hoga )
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteProjectId,
        queries
        //querie return value in the form of array
        //isliye hamne AllPosts mein ek empty array pass kare hai ta ke uske andar sari posts store ho jaye
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts ::error", error);
      return false;
    }
  }

  //file upload Serivces banana hai

  async uploadFile(file) {
    try {
      return await this.bucket.uploadFile(
        conf.appwriteBucketId,
        ID.unique(),
        //isko ek unique id chiyea hoti hai
        file
        // ye function at the end FILEID(imageId) he return karta hai
        // issi id ko ham use kar ke createpost me (image ko) show karwa sakte hai
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile ::error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite service :: fileId ::error", error);
    }
  }

  getFilePreview(fileId) {
    //get filePreview promise nahi hota hai is liye async and await nahi use kare hai AND it is very fast
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();
export default service;
