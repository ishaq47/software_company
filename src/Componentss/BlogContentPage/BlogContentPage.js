import react from "react";
import BlogContent from "../BlogContent/BlogContent";
const BlogContentPage = (blogs) => {
  // console.log("Home page");
  // console.log(blogs);
  return (
    <div>
      <BlogContent blogs={blogs} />
    </div>
  );
};
export default BlogContentPage;
