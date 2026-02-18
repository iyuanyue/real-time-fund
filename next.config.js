/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出
  output: 'export',
  
  // 设置基础路径（重要！替换为你的仓库名）
  basePath: '/real-time-fund',
  
  // 禁用图像优化（GitHub Pages 不支持）
  images: {
    unoptimized: true,
  },
  
  // 如果使用了路由，需要配置 trailingSlash
  trailingSlash: true,
}

module.exports = nextConfig
