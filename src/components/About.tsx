"use client";

export default function About() {
  return (
    <div id="about" className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">About RouletteAI</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            RouletteAI is a powerful platform that enables developers to create, manage, and deploy AI agents in the cloud. 
            Our platform provides a simple yet powerful API to handle authentication, agent initialization, and execution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-3">Easy Integration</h3>
            <p className="text-muted-foreground">
              Simple REST API endpoints that can be integrated with any application stack.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-3">Secure by Design</h3>
            <p className="text-muted-foreground">
              Built-in authentication and secure key management for all your AI agents.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-3">Scalable Infrastructure</h3>
            <p className="text-muted-foreground">
              Cloud-based infrastructure that scales with your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}