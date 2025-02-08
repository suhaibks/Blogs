import React, { useState } from 'react';
import { blogPosts } from '../data/blogData';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Sort posts by date
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  // Filter posts based on search query
  const filteredPosts = sortedPosts.filter(post => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.date.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query)
    );
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="page-container home-page">
      <section className="search-section">
        <div className="search-container">
          <svg 
            className="search-icon" 
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search Blogs"
            value={searchQuery}
            onChange={handleSearch}
          />
          {searchQuery && (
            <svg 
              className="clear-icon"
              onClick={clearSearch}
              viewBox="0 0 24 24"
            >
              <path d="M18.3 5.71L12 12l6.3 6.29-1.41 1.41L10.59 13.41 4.29 19.7 2.88 18.29l6.3-6.29-6.3-6.29L4.29 3.29 10.59 9.59l6.29-6.3z"/>
            </svg>
          )}
        </div>
      </section>

      <section className="featured-posts">
        <h2>Latest Posts</h2>
        <div className="blog-grid">
          {filteredPosts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-content">
                <h3>{post.title}</h3>
                <img src={process.env.PUBLIC_URL + post.image} alt={post.title} className="post-image"/>
                <div className="post-meta">
                  <span>Posted on: {post.date}</span>
                </div>
                <p>{post.excerpt}</p><br></br>
                <button className="button" onClick={() => navigate(`/blog/${post.id}`)}>Read More</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
