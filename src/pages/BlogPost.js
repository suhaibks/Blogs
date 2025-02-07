import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { useNavigate } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts.find(post => post.id === postId);
  const navigate = useNavigate();

  if (!post) return <div>Post not found</div>;

  return (
    <div className="page-container blog-post-page">
      <article>
        <h1>{post.title}</h1><br></br>
        <div className='image-content'>
          <img src={process.env.PUBLIC_URL + post.image} alt={post.title} className='blogpost-image'/>
        </div><br></br>
        <div className="post-meta">
          <span>By {post.author}, </span>
          <span>{post.date}</span>
        </div><br></br>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} /><br></br>
        <button className="button" onClick={() => navigate('/')}>Back to All Posts</button>
      </article>
    </div>
  );
};

export default BlogPost;