import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getBlogPosts() {
  try {
    // Use the same approach for both development and production
    const contentDir = path.join(process.cwd(), 'content');
    const files = fs.readdirSync(contentDir);
    
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const fileContent = fs.readFileSync(path.join(contentDir, file), 'utf-8');
        const { data } = matter(fileContent);
        return {
          ...data,
          slug: file.replace('.md', '')
        };
      });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}