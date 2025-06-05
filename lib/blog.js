import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getBlogPosts() {
  // Check if we're in production
  if (process.env.NODE_ENV === 'production') {
    // In production, use import.meta.glob to get blog data
    const blogs = import.meta.glob('/content/*.md', { eager: true });
    
    return Object.values(blogs).map(blog => {
      const { data } = matter(blog.default);
      return data;
    });
  } else {
    // In development, use fs operations
    const contentDir = path.join(process.cwd(), 'content');
    const files = fs.readdirSync(contentDir);
    
    return files.map(file => {
      const fileContent = fs.readFileSync(path.join(contentDir, file), 'utf-8');
      const { data } = matter(fileContent);
      return data;
    });
  }
}