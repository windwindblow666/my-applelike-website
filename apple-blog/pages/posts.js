import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 从本地存储加载文章
    const savedPosts = JSON.parse(localStorage.getItem('blog_posts') || '[]');
    setPosts(savedPosts);
  }, []);

  return (
    <>
      <Head>
        <title>文章列表 - MyBlog</title>
      </Head>

      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <a href="/" style={logoStyle}>📝 MyBlog</a>
          <div style={navLinksStyle}>
            <a href="/" style={navLinkStyle}>首页</a>
            <a href="/posts" style={{...navLinkStyle, color: '#fff'}}>文章</a>
            <a href="/write" style={navLinkStyle}>写文章</a>
            <a href="/visitors" style={navLinkStyle}>访客</a>
          </div>
        </div>
      </nav>

      <main style={mainStyle}>
        <h1 style={pageTitleStyle}>文章列表</h1>
        
        {posts.length === 0 ? (
          <div style={emptyStyle}>
            <p>还没有文章，开始写第一篇吧！</p>
            <a href="/write" style={writeButtonStyle}>写文章</a>
          </div>
        ) : (
          <div style={postsGridStyle}>
            {posts.map((post) => (
              <article key={post.id} style={postCardStyle}>
                <img 
                  src={post.image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800'} 
                  alt={post.title}
                  style={postImageStyle}
                />
                <div style={postContentStyle}>
                  <h2 style={postTitleStyle}>{post.title}</h2>
                  <p style={postExcerptStyle}>
                    {post.content.substring(0, 100)}...
                  </p>
                  <div style={postMetaStyle}>
                    <span style={postDateStyle}>📅 {post.date}</span>
                    <span style={postViewsStyle}>👁 {post.views || 0} 次阅读</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', sans-serif;
          background: #000; 
          color: #fff; 
        }
      `}</style>
    </>
  );
}

const navStyle = {
  background: 'rgba(0,0,0,0.8)',
  backdropFilter: 'blur(20px)',
  position: 'fixed',
  top: 0, left: 0, right: 0,
  zIndex: 1000,
  borderBottom: '1px solid rgba(255,255,255,0.1)',
};

const navContainerStyle = {
  maxWidth: '1024px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '52px',
};

const logoStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '20px',
  fontWeight: 600,
};

const navLinksStyle = {
  display: 'flex',
  gap: '30px',
};

const navLinkStyle = {
  color: 'rgba(255,255,255,0.8)',
  textDecoration: 'none',
  fontSize: '14px',
};

const mainStyle = {
  padding: '100px 20px 40px',
  maxWidth: '1200px',
  margin: '0 auto',
  minHeight: '100vh',
};

const pageTitleStyle = {
  fontSize: '48px',
  fontWeight: 700,
  marginBottom: '40px',
  textAlign: 'center',
};

const postsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  gap: '30px',
};

const postCardStyle = {
  background: 'rgba(255,255,255,0.05)',
  borderRadius: '20px',
  overflow: 'hidden',
  border: '1px solid rgba(255,255,255,0.1)',
  transition: 'transform 0.3s',
  cursor: 'pointer',
};

const postImageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};

const postContentStyle = {
  padding: '24px',
};

const postTitleStyle = {
  fontSize: '24px',
  fontWeight: 600,
  marginBottom: '12px',
  color: '#fff',
};

const postExcerptStyle = {
  color: 'rgba(255,255,255,0.6)',
  fontSize: '16px',
  marginBottom: '16px',
  lineHeight: 1.6,
};

const postMetaStyle = {
  display: 'flex',
  gap: '20px',
  color: 'rgba(255,255,255,0.4)',
  fontSize: '14px',
};

const postDateStyle = {};
const postViewsStyle = {};

const emptyStyle = {
  textAlign: 'center',
  padding: '80px 20px',
  color: 'rgba(255,255,255,0.6)',
};

const writeButtonStyle = {
  display: 'inline-block',
  marginTop: '20px',
  background: '#0071e3',
  color: '#fff',
  padding: '14px 28px',
  borderRadius: '980px',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 500,
};
