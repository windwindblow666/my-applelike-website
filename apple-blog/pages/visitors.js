import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Visitors() {
  const [visitors, setVisitors] = useState([]);
  const [stats, setStats] = useState({ total: 0, today: 0, unique: 0 });

  useEffect(() => {
    // 加载访客记录
    const savedVisitors = JSON.parse(localStorage.getItem('blog_visitors') || '[]');
    setVisitors(savedVisitors);

    // 统计
    const today = new Date().toISOString().split('T')[0];
    const todayVisits = savedVisitors.filter(v => v.timestamp.startsWith(today));
    const uniqueIPs = new Set(savedVisitors.map(v => v.ip)).size;
    
    setStats({
      total: savedVisitors.length,
      today: todayVisits.length,
      unique: uniqueIPs || 1,
    });

    // 记录当前访客
    recordCurrentVisitor();
  }, []);

  const recordCurrentVisitor = () => {
    const visitors = JSON.parse(localStorage.getItem('blog_visitors') || '[]');
    visitors.push({
      id: Date.now(),
      ip: '访客-' + Math.floor(Math.random() * 1000),
      userAgent: navigator.userAgent.substring(0, 50) + '...',
      timestamp: new Date().toISOString(),
      action: '查看访客统计',
    });
    localStorage.setItem('blog_visitors', JSON.stringify(visitors.slice(-100)));
  };

  const clearData = () => {
    if (confirm('确定要清空所有数据吗？')) {
      localStorage.removeItem('blog_visitors');
      localStorage.removeItem('blog_posts');
      setVisitors([]);
      setStats({ total: 0, today: 0, unique: 0 });
    }
  };

  return (
    <>
      <Head>
        <title>访客统计 - MyBlog</title>
      </Head>

      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <a href="/" style={logoStyle}>📝 MyBlog</a>
          <div style={navLinksStyle}>
            <a href="/" style={navLinkStyle}>首页</a>
            <a href="/posts" style={navLinkStyle}>文章</a>
            <a href="/write" style={navLinkStyle}>写文章</a>
            <a href="/visitors" style={{...navLinkStyle, color: '#fff'}}>访客</a>
          </div>
        </div>
      </nav>

      <main style={mainStyle}>
        <h1 style={pageTitleStyle}>访客统计</h1>

        {/* 统计卡片 */}
        <div style={statsGridStyle}>
          <div style={statCardStyle}>
            <div style={statNumberStyle}>{stats.total}</div>
            <div style={statLabelStyle}>总访问量</div>
          </div>
          <div style={statCardStyle}>
            <div style={statNumberStyle}>{stats.today}</div>
            <div style={statLabelStyle}>今日访问</div>
          </div>
          <div style={statCardStyle}>
            <div style={statNumberStyle}>{stats.unique}</div>
            <div style={statLabelStyle}>独立访客</div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div style={actionsStyle}>
          <button onClick={clearData} style={clearButtonStyle}>清空数据</button>
        </div>

        {/* 访客列表 */}
        <h2 style={sectionTitleStyle}>最近访客</h2>
        
        {visitors.length === 0 ? (
          <div style={emptyStyle}>暂无访客记录</div>
        ) : (
          <div style={tableContainerStyle}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>时间</th>
                  <th style={thStyle}>访客ID</th>
                  <th style={thStyle}>设备信息</th>
                  <th style={thStyle}>行为</th>
                </tr>
              </thead>
              <tbody>
                {[...visitors].reverse().map((visitor) => (
                  <tr key={visitor.id}>
                    <td style={tdStyle}>{new Date(visitor.timestamp).toLocaleString('zh-CN')}</td>
                    <td style={tdStyle}>{visitor.ip}</td>
                    <td style={tdStyle} title={visitor.userAgent}>{visitor.userAgent.substring(0, 30)}...</td>
                    <td style={tdStyle}>{visitor.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

const statsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '20px',
  marginBottom: '30px',
};

const statCardStyle = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '16px',
  padding: '30px',
  textAlign: 'center',
};

const statNumberStyle = {
  fontSize: '48px',
  fontWeight: 700,
  color: '#fff',
  marginBottom: '8px',
};

const statLabelStyle = {
  fontSize: '16px',
  color: 'rgba(255,255,255,0.8)',
};

const actionsStyle = {
  marginBottom: '40px',
  textAlign: 'center',
};

const clearButtonStyle = {
  background: 'rgba(255,255,255,0.1)',
  color: '#ff6b6b',
  border: '1px solid rgba(255,255,255,0.2)',
  padding: '10px 20px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '14px',
};

const sectionTitleStyle = {
  fontSize: '24px',
  fontWeight: 600,
  marginBottom: '20px',
};

const emptyStyle = {
  textAlign: 'center',
  padding: '60px 20px',
  color: 'rgba(255,255,255,0.4)',
};

const tableContainerStyle = {
  background: 'rgba(255,255,255,0.05)',
  borderRadius: '16px',
  overflow: 'hidden',
  border: '1px solid rgba(255,255,255,0.1)',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const thStyle = {
  padding: '16px',
  textAlign: 'left',
  background: 'rgba(255,255,255,0.05)',
  color: 'rgba(255,255,255,0.6)',
  fontWeight: 500,
  fontSize: '14px',
};

const tdStyle = {
  padding: '16px',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  color: 'rgba(255,255,255,0.8)',
  fontSize: '14px',
};
