"use client";

export default function Models() {
  const models = [
    {
      name: 'gpt-4o',
      description: 'Latest gpt-4 model with enhanced capabilities and improved context understanding.',
      features: ['Advanced reasoning', 'Complex task handling', 'Improved accuracy']
    },
    {
      name: 'gpt-4o-mini',
      description: 'Lightweight version of gpt-4o optimized for faster response times.',
      features: ['Fast inference', 'Resource efficient', 'Cost effective']
    },
    {
      name: 'o1',
      description: 'Specialized model for organizational tasks and business logic.',
      features: ['Business context aware', 'Process optimization', 'Structured output']
    },
    {
      name: 'o1-mini',
      description: 'Compact version of o1 for basic organizational tasks.',
      features: ['Quick responses', 'Basic task handling', 'Efficient processing']
    }
  ];

  return (
    <div id="models" className="bg-card py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Available Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model) => (
            <div key={model.name} className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">{model.name}</h3>
              <p className="text-muted-foreground mb-4">{model.description}</p>
              <ul className="space-y-2">
                {model.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}