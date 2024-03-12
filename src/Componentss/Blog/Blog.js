// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
// import "./Blog.css";

// const Blog = ({ blogs }) => {
//   console.log("Blog Object :", blogs);
//   console.log(blogs);

//   const [firstImage, setFirstImage] = useState("");
//   useEffect(() => {
//     handle();
//   }, []);
//   const handle = () => {
//     // setFirstImage(blogs.data[0]?.attributes?.coverImg.data?.attributes.url);
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Blog - Techcreator Software House</title>
//         <meta
//           name="description"
//           content="Looking for reliable end-to-end solutions? Look no further. Since 2001, we've been providing customized services to meet our clients' unique needs."
//         />
//         <meta
//           name="keywords"
//           content="techcreator, techcreatorsofwarehouse, sofwarehouse, appsdevelopment, softwareindustry, swabisoftwarehouse, techcreatorabout"
//         />
//         <link rel="canonical" href="/blog" />
//       </Helmet>
//       <div className="main_class">
//         <Helmet>
//           <title>Blog - Techcreator Software Company</title>
//           <meta
//             name="description"
//             content="We have been providing quality services since 2001. We provide our clients with complete end-to-end solutions. We offer customized solutions according to their needs."
//           />
//           <meta
//             name="keywords"
//             content="techcreator, techcreatorsofwarehouse, sofwarehouse, appsdevelopment, softwareindustry, swabisoftwarehouse, techcreatorabout"
//           />
//           <link rel="canonical" href="techcreator.co/blog" />
//         </Helmet>

//         <div className="class-main w-full bg-[#f9f9f9] py-[50px] mt-10">
//           <div className="class_b max-w-[1240px] mx-auto">
//             <div className=" class_c grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
//               {blogs.data.map((blog) => (
//                 <Link to={`/blogc/${blog.id}`}>
//                   <div className=" class_d bg-white rounded-xl overflow-hidden drop-shadow-md">
//                     <img
//                       className="image h-56 w-full object-cover"
//                       // src={`http://localhost:1337${blog.attributes?.coverImg.data?.attributes.url}`}
//                       src={blog.attributes.coverImg.data.attributes.url}
//                     />
//                     <div className=" class-e p-8">
//                       <h3 className="class-f font-bold text-2xl my-3">
//                         {blog.attributes.blogTitle}
//                       </h3>
//                       <p className=" class-g text-gray-600 text-base">
//                         {blog.attributes.blogDesc}
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Blog;
// import './Blog.css'; // Make sure to import your CSS file

// Blog.js
// Blog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Blog.css'; // For Blog component
function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('https://techcreator.basit.agency/wp-json/wp/v2/posts');
        console.log("lsdf", response)
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="blog-container h-screen">
      <div className='heading_class'>
      <h1>Blog Posts</h1>
      </div>
      <div className="blog-cards-container">
        {posts.map(post => (
          <Link to={`/post/${post.slug}`} key={post.id} className="blog-card-link">
            <div className="blog-card">
              <div className="blog-card-image">
                {/* <img src={post.featured_media} alt={post.title.rendered} /> */}
              </div>
              <div className="blog-card-content">
                <h2 className="blog-card-title">{post.title.rendered}</h2>
                <p className="blog-card-excerpt">
                  {post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 100)}...
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;



