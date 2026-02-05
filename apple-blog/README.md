# 🍎 Apple Style Blog - 苹果风格个人博客

一个仿照苹果官网设计的个人博客系统，支持写文章、图文上传和访客统计。

## ✨ 功能特性

- ✅ **写作系统** - 简洁的编辑器，支持图文混排
- ✅ **访客统计** - 实时查看访问量、独立访客
- ✅ **苹果风格设计** - 深色主题、毛玻璃效果、圆角设计
- ✅ **响应式布局** - 完美适配手机、平板、电脑
- ✅ **数据本地存储** - 使用 LocalStorage，无需数据库

## 🚀 部署方法

### 方法一：Vercel 部署（推荐）

1. 上传代码到 GitHub
2. 登录 [Vercel](https://vercel.com)
3. 导入 GitHub 仓库
4. 点击 Deploy
5. 完成！

### 方法二：本地预览

```bash
# 安装依赖
npm install

# 运行开发服务器
npm run dev

# 打开 http://localhost:3000
```

## 📁 项目结构

```
apple-blog/
├── pages/
│   ├── index.js      # 首页
│   ├── posts.js      # 文章列表
│   ├── write.js      # 写文章
│   └── visitors.js   # 访客统计
├── package.json      # 项目配置
└── next.config.js    # Next.js 配置
```

## 📝 使用说明

1. **写文章**：访问 `/write`，填写标题和内容，点击发布
2. **查看文章**：访问 `/posts`，浏览所有文章
3. **查看访客**：访问 `/visitors`，查看访问统计

## 🔧 进阶配置

### 添加数据库（可选）

目前数据存储在浏览器 LocalStorage 中，如需持久化：

1. 注册 [Supabase](https://supabase.com)（免费）
2. 创建 `posts` 和 `visitors` 表
3. 修改代码使用 Supabase API

### 添加自定义域名

1. 购买域名（阿里云/腾讯云/Namecheap）
2. 在 Vercel 项目设置中添加域名
3. 配置 DNS 解析

## 💰 成本

- **服务器**：¥0（Vercel 免费）
- **域名**：¥10-30/年（可选）
- **数据库**：¥0（LocalStorage 或 Supabase 免费额度）

## 📄 许可证

MIT License - 可自由使用和修改
