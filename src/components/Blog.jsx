import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, FileText } from 'lucide-react';
import WindowFrame from './WindowFrame';

const BlogCard = ({ post, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group cursor-pointer"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center text-accent">
        <FileText size={20} />
      </div>
      <div>
        <h4 className="text-text-main font-bold group-hover:text-accent transition-colors">{post.title}</h4>
        <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-gray-700 rounded-full" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
    <p className="text-gray-400 text-sm line-clamp-2 pl-14">
      {post.excerpt}
    </p>
  </motion.div>
);

const Blog = () => {
  const posts = [
    {
      title: "Optimizing React Performance in 2026",
      excerpt: "A deep dive into memoization, lazy loading, and the new React Compiler.",
      date: "Oct 12, 2023",
      readTime: "8 min"
    },
    {
      title: "Why I Switched to Tailwind v4",
      excerpt: "Exploring the lightning-fast performance and simplified configuration of the latest Tailwind.",
      date: "Oct 05, 2023",
      readTime: "5 min"
    },
    {
      title: "The Art of Creative Coding",
      excerpt: "How to blend technical rigor with artistic intuition in frontend development.",
      date: "Sep 28, 2023",
      readTime: "12 min"
    }
  ];

  return (
    <section id="blog" className="py-24 px-6 md:pl-32 md:pr-12">
      <div className="max-w-4xl mx-auto">
        <WindowFrame title="articles.md">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 tracking-tighter italic">Latest Thoughts</h2>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">// sharing my insights</p>
          </div>
          
          <div className="space-y-10">
            {posts.map((post, i) => (
              <BlogCard key={i} post={post} index={i} />
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-border-color">
            <button className="text-xs font-mono text-accent hover:underline flex items-center gap-2">
              VIEW_ALL_POSTS() <ArrowRight size={14} />
            </button>
          </div>
        </WindowFrame>
      </div>
    </section>
  );
};

export default Blog;
