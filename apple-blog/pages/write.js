import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Write() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 创建新文章
    const newPost = {
      id: Date.now(),
      title,
      content,
      image: image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
      date: new Date().toISOString().split('T')[0],
      views: 0,
    };

    // 保存到本地存储
    const existingPosts = JSON.parse(localStorage.getItem('blog_posts') || '[]');
    localStorage.setItem('blog_posts', JSON.stringify([newPost, ...existingPosts]));

    // 记录访客（作者自己）
    recordVisitor('作者发布文章');

    // 跳转回文章列表
    setTimeout(() => {
      router.push('/posts');
    }, 500);
  };

  const recordVisitor = (action) => {
    const visitors = JSON.parse(localStorage.getItem('blog_visitors') || '[]');
    visitors.push({
      id: Date.now(),
      ip: '127.0.0.1',
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      action: action || '访问页面',
    });
    localStorage.setItem('blog_visitors', JSON.stringify(visitors.slice(-100))); // 只保留最近100条
  };

  return (
    <>
      <Head>
        <title>写文章 - MyBlog</title>
      </Head>

      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <a href="/" style={logoStyle}>📝 MyBlog</a>
          <div style={navLinksStyle}>
            <a href="/" style={navLinkStyle}>首页</a>
            <a href="/posts" style={navLinkStyle}>文章</a>
            <a href="/write" style={{...navLinkStyle, color: '#fff'}}>写文章</a>
            <a href="/visitors" style={navLinkStyle}>访客</a>
          </div>
        </div>
      </nav>

      <main style={mainStyle}>
        <h1 style={pageTitleStyle}>写文章</h1>
        
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>文章标题</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="请输入标题"
              required
              style={inputStyle}
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>封面图片链接（可选）</label>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
              style={inputStyle}
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>文章内容</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="开始写作..."
              required
              rows={15}
              style={textareaStyle}
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            style={submitButtonStyle}
          >
            {isSubmitting ? '发布中...' : '发布文章'}
          </button>
        </form>
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
  maxWidth: '800px',
  margin: '0 auto',
  minHeight: '100vh',
};

const pageTitleStyle = {
  fontSize: '48px',
  fontWeight: 700,
  marginBottom: '40px',
  textAlign: 'center',
};

const formStyle = {
  background: 'rgba(255,255,255,0.05)',
  borderRadius: '20px',
  padding: '40px',
  border: '1px solid rgba(255,255,255,0.1)',
};

const formGroupStyle = {
  marginBottom: '24px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  color: 'rgba(255,255,255,0.8)',
  fontSize: '16px',
  fontWeight: 500,
};

const inputStyle = {
  width: '100%',
  padding: '14px',
  background: 'rgba(255,255,255,0.1)',
  border: '1px solid rgba(255,255,255,0.2)',
  borderRadius: '10px',
  color: '#fff',
  fontSize: '16px',
  outline: 'none',
};

const textareaStyle = {
  width: '100%',
  padding: '14px',
  background: 'rgba(255,255,255,0.1)',
  border: '1px solid rgba(255,255,255,0.2)',
  borderRadius: '10px',
  color: '#fff',
  fontSize: '16px',
  outline: 'none',
  resize: 'vertical',
  minHeight: '300px',
  fontFamily: 'inherit',
  lineHeight: 1.8,
};

const submitButtonStyle = {
  width: '100%',
  padding: '16px',
  background: '#0071e3',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  fontSize: '18px',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.3s',
};
