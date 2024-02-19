import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Post.css'; // For Post component

// Define metadata for each post
const postMetadata = {
  post1: {
    title: 'hello-world',
    description: 'Hello world',
    keywords: 'post, hello, keyword3',
    robots: 'index,follow',
    // Add other metadata fields
  },
  post2: {
    title: 'Post 2 Title',
    description: 'Description for Post 2',
    keywords: 'keyword4, keyword5, keyword6',
    robots: 'index,follow',
    // Add other metadata fields
  },
  post3: {
    title: 'Post 3 Title',
    description: 'Description for Post 3',
    keywords: 'keyword7, keyword8, keyword9',
    robots: 'index,follow',
    // Add other metadata fields
  },
  // Add more post metadata as needed
};

function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(`https://techcreator.basit.agency/wp-json/wp/v2/posts?slug=${slug}`);
        if (response.data.length > 0) {
          setPost(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    }

    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  // Get the metadata for the current post slug
  const metadata = postMetadata[slug] || {};

  return (
    <div className='main-class'>
    <div className="post-container">
      <Helmet>
        <title>{metadata.title || post.title.rendered}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        {/* Add other meta tags specific to this post */}
      </Helmet>
      <h2>{post.title.rendered}</h2>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
    </div>
  );
}

export default Post;
