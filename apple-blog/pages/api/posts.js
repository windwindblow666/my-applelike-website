// 博客文章数据（简化版，使用内存存储，适合入门）
// 如果要持久化，可以切换到 Supabase

let posts = [
  {
    id: 1,
    title: "欢迎来到我的博客",
    content: "这是我的第一篇文章。这里支持富文本内容，可以写很长的文章...",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
    date: "2026-02-05",
    views: 128
  },
  {
    id: 2,
    title: "我的旅行日记",
    content: "今天去了很美的地方，拍了很多照片。",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
    date: "2026-02-04",
    views: 89
  }
];

let visitors = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    // 获取所有文章
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    // 创建新文章
    const { title, content, image } = req.body;
    const newPost = {
      id: posts.length + 1,
      title,
      content,
      image: image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
      date: new Date().toISOString().split('T')[0],
      views: 0
    };
    posts.push(newPost);
    res.status(201).json(newPost);
  }
}

// 访客记录 API
export function visitorHandler(req, res) {
  if (req.method === 'POST') {
    const { ip, userAgent, timestamp } = req.body;
    visitors.push({ ip, userAgent, timestamp, id: visitors.length + 1 });
    res.status(201).json({ message: 'Recorded' });
  } else if (req.method === 'GET') {
    res.status(200).json(visitors);
  }
}
