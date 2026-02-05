import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>我的博客 - Apple Style</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {/* 导航栏 - 苹果风格 */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <a href="/" style={styles.logo}>📝 MyBlog</a>
          <div style={styles.navLinks}>
            <a href="/" style={styles.navLink}>首页</a>
            <a href="/posts" style={styles.navLink}>文章</a>
            <a href="/write" style={styles.navLink}>写文章</a>
            <a href="/visitors" style={styles.navLink}>访客</a>
          </div>
        </div>
      </nav>

      {/* 英雄区域 - 苹果风格大标题 */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            我的博客
            <span style={styles.gradientText}>。</span>
          </h1>
          <p style={styles.heroSubtitle}>
            记录生活，分享思考。简约而不简单。
          </p>
          <div style={styles.heroButtons}>
            <a href="/posts" style={styles.primaryButton}>浏览文章</a>
            <a href="/write" style={styles.secondaryButton}>开始写作 →</a>
          </div>
        </div>
      </section>

      {/* 特色功能区 */}
      <section style={styles.features}>
        <div style={styles.feature}>
          <div style={styles.featureIcon}>✍️</div>
          <h3 style={styles.featureTitle}>写作</h3>
          <p style={styles.featureDesc}>简洁的编辑器，专注创作</p>
        </div>
        <div style={styles.feature}>
          <div style={styles.featureIcon}>📊</div>
          <h3 style={styles.featureTitle}>统计</h3>
          <p style={styles.featureDesc}>实时查看访客数据</p>
        </div>
        <div style={styles.feature}>
          <div style={styles.featureIcon}>🎨</div>
          <h3 style={styles.featureTitle}>美观</h3>
          <p style={styles.featureDesc}>苹果风格设计</p>
        </div>
      </section>

      {/* 页脚 */}
      <footer style={styles.footer}>
        <p>© 2026 MyBlog. All rights reserved.</p>
      </footer>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
          background: #000;
          color: #fff;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
}

// 苹果风格 CSS
const styles = {
  nav: {
    background: 'rgba(0,0,0,0.8)',
    backdropFilter: 'blur(20px)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  navContainer: {
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '52px',
  },
  logo: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: 600,
  },
  navLinks: {
    display: 'flex',
    gap: '30px',
  },
  navLink: {
    color: 'rgba(255,255,255,0.8)',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s',
  },
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, #000 0%, #1a1a2e 100%)',
    paddingTop: '52px',
  },
  heroContent: {
    textAlign: 'center',
    maxWidth: '800px',
    padding: '0 20px',
  },
  heroTitle: {
    fontSize: 'clamp(48px, 10vw, 96px)',
    fontWeight: 700,
    marginBottom: '20px',
    letterSpacing: '-2px',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroSubtitle: {
    fontSize: 'clamp(18px, 3vw, 28px)',
    color: 'rgba(255,255,255,0.6)',
    marginBottom: '40px',
  },
  heroButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryButton: {
    background: '#0071e3',
    color: '#fff',
    padding: '16px 32px',
    borderRadius: '980px',
    textDecoration: 'none',
    fontSize: '17px',
    fontWeight: 500,
    transition: 'all 0.3s',
    display: 'inline-block',
  },
  secondaryButton: {
    color: '#2997ff',
    textDecoration: 'none',
    fontSize: '17px',
    fontWeight: 500,
    padding: '16px 32px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
    padding: '100px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    background: '#000',
  },
  feature: {
    textAlign: 'center',
    padding: '40px',
    borderRadius: '20px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  featureIcon: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  featureTitle: {
    fontSize: '24px',
    fontWeight: 600,
    marginBottom: '10px',
    color: '#fff',
  },
  featureDesc: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '16px',
  },
  footer: {
    textAlign: 'center',
    padding: '40px 20px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    color: 'rgba(255,255,255,0.4)',
  },
};
