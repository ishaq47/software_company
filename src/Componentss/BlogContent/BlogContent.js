import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./BlogContent.css";
import Footers from "../Footers/Footer";
const BlogContent = ({ blogs }) => {
  const [blog, setBlog] = useState("");
  const [firstImage, setFirstImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const { id } = useParams();

  console.log("blog data :", blog);
  useEffect(() => {
    handle();
  }, []);
  const handle = () => {
    let arr = blogs.blogs.data?.find((elm) => elm.id == id);

    setBlog(arr);
    // attributes.coverImg.data.attributes.url

    setFirstImage(arr?.attributes?.coverImg.data?.attributes.url);
    setSecondImage(arr?.attributes.authorImg.data.attributes.url);
  };

  return (
    <>
      {/* <div className="  class_blogc_a "> */}
      <div className=" class_blogc_b_container">
        <div className="class_blogc_c-row">
          <div className=" class_blogc_d  ">
            <img className=" class_blogc_e " src={firstImage} />
            <h1 className="class_blogc_f  ">{blog?.attributes?.blogTitle}</h1>
            <div className="class_blogc_g ">
              <ReactMarkdown className="class_blogc_h  ">
                {blog?.attributes?.blogContent}
              </ReactMarkdown>
            </div>
          </div>

          <div className="class_blogc_i ">
            <div className="class_blogc_inner_i">
              <img className=" class_blogc_j " src={secondImage} />

              <h1 className="class_blogc_k ">{blog?.attributes?.authorName}</h1>
              <p className="class_blogc_m_img ">
                {blog?.attributes?.authorDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <Footers /> */}
    </>
  );
};
export default BlogContent;
