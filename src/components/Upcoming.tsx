"use client";

export default function Upcoming() {
  const features = [
    {
      title: 'File Processing Tools',
      description: 'Advanced tools for reading and processing various file formats including PDFs, documents, and images.',
      availableIn: 'v2.0'
    },
    {
      title: 'Web Scraping Tools',
      description: 'Powerful web scraping capabilities to gather and process information from websites.',
      availableIn: 'v2.0'
    },
    {
      title: 'Custom Tool Integration',
      description: 'Ability to integrate your own custom tools and extend agent capabilities.',
      availableIn: 'v2.0'
    },
    {
      title: 'Advanced Analytics',
      description: 'Detailed insights and analytics about your AI agents\' performance and usage.',
      availableIn: 'v2.1'
    }
  ];

  return (
    <div id="upcoming" className="bg-card py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Coming Soon</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Exciting new features and tools coming in our next major releases
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-background p-6 rounded-lg border border-border">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {feature.availableIn}
                </span>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}