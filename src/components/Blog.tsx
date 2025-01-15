"use client";

export default function Blog() {
  const posts = [
    {
      title: 'Introducing RouletteAI v1.0',
      date: '2024-02-20',
      excerpt: 'Learn about the features and capabilities of our first major release.',
      readTime: '5 min read'
    },
    {
      title: 'Best Practices for AI Agent Management',
      date: '2024-02-18',
      excerpt: 'Tips and tricks for getting the most out of your AI agents.',
      readTime: '7 min read'
    },
    {
      title: 'Understanding Model Selection',
      date: '2024-02-15',
      excerpt: 'A guide to choosing the right model for your use case.',
      readTime: '6 min read'
    }
  ];

  return (
    <div id="blog" className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}